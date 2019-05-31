<template>
  <div :class="['zk-image-upload', { 'zk-image-upload-loading': isUpload }]">
    <div class="zk-image-upload-progress">
      <div class="zk-progress" :style="`padding-top: ${ uploadProgress }%;`">
        <div class="zk-progress-bar"></div>
        <div class="zk-progress-text">
          <span>{{ uploadProgress }}%</span>
        </div>
      </div>
    </div>
    <zk-image-select
      v-model="src"
      ref="imageSelect"
      :view-src-list="viewSrcList"
      :options="currentOptions"
      :readonly="readonly"
      :cover="cover"
      @change-file="changeFile">
      <slot name="label" slot="label"></slot>
      <slot v-if="!$slots['upload-label']" slot="select-label">重新上传</slot>
      <slot v-else name="upload-label" slot="select-label"></slot>
    </zk-image-select>
  </div>
</template>

<script>
import ImageSelect from '../../image-select'
import { MessageBox } from '../../message-box'

const msgbox = MessageBox.msgbox

export default {
  name: 'ZkImageUpload',
  components: {
    'zk-image-select': ImageSelect
  },
  props: {
    value: String,
    options: Object,
    viewSrcList: Array,
    readonly: {
      type: Boolean,
      required: false
    },
    cover: {
      type: Boolean,
      required: false
    },
    httpRequest: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      src: this.value,
      currentValue: this.value,
      isUpload: false,
      uploadProgress: 0
    }
  },
  computed: {
    currentOptions () {
      return Object.assign({
      }, this.options || {})
    }
  },
  watch: {
    value () {
      this.src = this.value
      this.currentValue = this.value
    },
    currentValue () {
      if (!this.currentValue) {
        this.$emit('upload-result', undefined)
      }
      this.$emit('input', this.currentValue)
    }
  },
  methods: {
    changeFile (file) {
      if (!file) {
        this.currentValue = ''
        return
      }
      this.uploadProgress = 0
      this.isUpload = true
      this.httpRequest({
        data: { file },
        onProgress: (e) => {
          this.uploadProgress = ((e.loaded / e.total * 100) | 0)
        },
        onSuccess: result => {
          this.currentValue = result
          this.src = this.currentValue
          this.isUpload = false
        },
        onError: error => {
          this.currentValue = ''
          this.src = ''
          this.isUpload = false
          msgbox.alert(String(error) || '上传失败，请检查网络是否再正常，再重新上传。', '上传失败', {
            closeOnClickModal: true,
            confirmButtonText: '重新上传',
            callback: action => {
              if (!this.$refs.imageSelect) return
              if (action !== 'confirm') return
              return this.$refs.imageSelect.selectImage()
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-image-upload {
  position: relative;
  display: inline-block;
}
.zk-image-upload-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  transition: opacity .2s cubic-bezier(.645,.045,.355,1);
  z-index: 1;
  display: none;
  .zk-progress {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: padding-top .2s;
    overflow: hidden;
    .zk-progress-bar {
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 13px;
      background-color: rgba(52, 52, 52, .6);
      box-sizing: border-box;
    }
    .zk-progress-text {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
  }
}
.zk-image-upload-loading .zk-image-upload-progress {
  display: block;
}
.zk-image-upload-loading /deep/ .zk-image-item-operating {
  display: none !important;
}
</style>
