<template>
  <div
    tabindex="0"
    :style="{ width }"
    :class="['zk-image-item', {
      'zk-image-item-add': !currentValue,
      'zk-image-item-readonly': readonly,
      'zk-image-item-cover': cover
    }]">
    <div class="zk-image-item-box" :style="{ 'background-image': `url(${currentValue})` }" @click="() => currentValue ? viewImage() : selectImage()">
      <div class="zk-image-item-operating" @click.stop="selectImage">
        <slot name="select-label">重新选择</slot>
      </div>
      <div class="zk-image-item-notval">
        <div class="icon-plus">
          <span class="icon-plus-line1"></span>
          <span class="icon-plus-line2"></span>
        </div>
        <div class="zk-image-item-label" v-if="$slots.label">
          <slot name="label"></slot>
        </div>
      </div>
    </div>
    <input ref="fileInput" v-show="false" type="file">
    <zk-image-view
      v-if="currentValue"
      :visible.sync="imageViewVisible"
      :src="currentValue"
      :src-list="currentViewSrcList">
    </zk-image-view>
  </div>
</template>

<script>
import { FileSelection } from '../../../../utils'

import ImageView from '../../image-view'
import { message } from '../../message'

export default {
  name: 'ZkImageSelect',
  components: {
    'zk-image-view': ImageView
  },
  props: {
    value: String,
    options: Object,
    viewSrcList: {
      type: Array,
      default: () => []
    },
    readonly: {
      type: Boolean,
      required: false
    },
    cover: {
      type: Boolean,
      required: false
    },
    width: {
      default: '147px'
    }
  },
  data () {
    return {
      currentValue: this.value,
      imageViewVisible: false
    }
  },
  computed: {
    currentOptions () {
      return Object.assign({
        maxSize: 1048576, // 1M
        minSize: 0,
        limitExt: '.jpg,.jpeg,.gif,.png,.bmp'
      }, this.options || {}, {
        accept: 'image/*',
        parseImgBase64: true,
        multiple: false,
        onError: this.onFileSelectionError,
        forcedChange: true
      })
    },
    currentViewSrcList () {
      return this.viewSrcList.indexOf(this.currentValue) < 0 ? [this.currentValue, ...this.viewSrcList] : this.viewSrcList
    }
  },
  watch: {
    options: {
      immediate: true,
      handler: 'createSelection'
    },
    value () {
      this.currentValue = this.value
    }
  },
  methods: {
    createSelection () {
      this.fileSelection = new FileSelection(this.currentOptions)
      return this.fileSelection
    },
    destroyedSelection () {
      if (this.fileSelection) {
        this.fileSelection.destroy()
        this.fileSelection = null
      }
    },
    onFileSelectionError (error) {
      switch (error.type) {
        case 'limitExt':
          ((limitExt) => {
            const exts = limitExt.split(',').map(item => {
              return item.substring(1)
            }).join('，')
            message.warning(`仅支持上传 ${exts} 格式的图片！`)
          })(this.currentOptions.limitExt)
          break
        case 'maxSize':
          ((size) => {
            const sizeStr = `${size}字节`
            const kb = size / 1024
            const kbstr = (kb % 1 === 0 && `${kb}KB`) || null
            const mb = kb / 1024
            const mbstr = (mb % 1 === 0 && `${mb}MB`) || null
            message.warning(`图片大小必须小于 ${mbstr || kbstr || sizeStr} 以内！`)
          })(this.currentOptions.maxSize)
          break
        case 'minSize':
          ((size) => {
            const sizeStr = `${size}字节`
            const kb = size / 1024
            const kbstr = (kb % 1 === 0 && `${kb}KB`) || null
            const mb = kb / 1024
            const mbstr = (mb % 1 === 0 && `${mb}MB`) || null
            message.warning(`图片大小必须大于 ${mbstr || kbstr || sizeStr} 以内！`)
          })(this.currentOptions.maxSize)
          break
        default:
          message.error('选择文件出错！')
      }
    },
    selectImage () {
      if (this.readonly) return
      return this.fileSelection.select(result => {
        if (result[0]) {
          this.currentValue = result[0].base64 || undefined
          this.$emit('input', this.currentValue)
          this.$emit('change-file', result[0].file)
        } else {
          this.deleteImage()
        }
      })
    },
    deleteImage () {
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('change-file', undefined)
    },
    viewImage () {
      if (!this.currentValue) return
      this.imageViewVisible = true
    }
  },
  destroyed () {
    this.destroyedSelection()
  }
}
</script>

<style lang="scss" scoped>
.zk-image-item {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  outline: none;
  background-color: #F8F8F8;
  &:focus {
    color: #409eff;
    outline: none;
  }
  .zk-image-item-box {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    cursor: pointer;
    padding-bottom: 100%;
    .zk-image-item-operating {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20%;
      min-height: 28px;
      font-size: 14px;
      box-sizing: border-box;
      background-color: rgba(52, 52, 52, .8);
      color: #F8F8F8;
      transition: opacity .2s cubic-bezier(.645,.045,.355,1);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .zk-image-item-notval {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      text-align: center;
      font-size: 14px;
      line-height: 28px;
      color: #606266;
      width: 100%;
      display: none;
    }
    .zk-image-item-label {
      font-size: 12px;
      color: #656565;
      margin-top: 12px;
      height: 12px;
      line-height: 15px;
    }
  }
  &.zk-image-item-add .zk-image-item-box .zk-image-item-operating {
    display: none;
  }
  &.zk-image-item-add .zk-image-item-box .zk-image-item-notval {
    display: block;
  }
  &.zk-image-item-readonly .zk-image-item-box .zk-image-item-operating,
  &.zk-image-item-readonly .zk-image-item-box .zk-image-item-notval {
    display: none;
  }
  &.zk-image-item-cover .zk-image-item-box {
    background-size: cover;
  }
}
.icon-plus {
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #2D76ED;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #FFFFFF;
    z-index: 1;
  }
  &::before {
    right: 4px;
    top: 13px;
    width: 20px;
    height: 2px;
  }
  &::after {
    right: 13px;
    top: 4px;
    width: 2px;
    height: 20px;
  }
}

</style>
