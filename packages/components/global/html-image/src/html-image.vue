<template>
  <div class="zk-imagehtml-container">
    <div
      :class="['zk-imagehtml-html', { 'zk-imagehtml-hide': !loading }]"
      :style="{
        width: parentWidth && `${parentWidth}px`,
        height: parentHeight && `${parentHeight}px`
      }"
      ref="html">
      <slot></slot>
    </div>
    <img v-show="!loading" class="zk-imagehtml-image" :src="src">
  </div>
</template>

<script>
import { toast } from '../../toast'
// import { Loading } from 'element-ui'
import html2canvas from 'html2canvas'

function canvasToBata64 (canvas) {
  return canvas.toDataURL('image/png')
}

function bata64ToBlob (bata64) {
  var arr = bata64.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

function blobToUrl (blob) {
  return URL.createObjectURL(blob)
}

export default {
  name: 'ZkHtmlImage',
  props: ['data'],
  data () {
    return {
      status: 'idle',
      src: '',
      parentWidth: undefined,
      parentHeight: undefined
    }
  },
  computed: {
    loading () {
      return this.status !== 'idle'
    }
  },
  watch: {
    data: {
      deep: true,
      handler: 'update'
    },
    loading () {
      if (this.loading && this.$el) {
        // this.$nextTick(() => {
        //   this.loadingInstance = Loading.service({
        //     target: this.$el
        //   })
        // })
      } else {
        // this.$nextTick(() => {
        //   this.loadingInstance && this.loadingInstance.close()
        // })
      }
    }
  },
  methods: {
    htmlImgLoad () {
      return new Promise((resolve, reject) => {
        let count = 0
        this.htmlImgLoadTimer = setInterval(() => {
          count += 1
          if (this.$refs.html && ![...this.$refs.html.querySelectorAll('img')].some(img => !img.complete)) {
            count = null
            clearInterval(this.htmlImgLoadTimer)
            return setTimeout(resolve, 0)
          } else if (count >= 50) {
            count = null
            clearInterval(this.htmlImgLoadTimer)
            return reject(new Error('加载图片超时！'))
          }
        }, 0)
      })
    },
    update () {
      if (!this.$refs.html) return
      if (this.status === 'wait') return
      if (this.status === 'run') {
        this.status = 'wait'
        return
      }
      this.status = 'run'
      return this.updateSrc().then(() => {
        if (this.status === 'wait') {
          this.status = 'idle'
          return this.update()
        } else {
          this.status = 'idle'
        }
      })
    },
    updateSrc () {
      if (!this.$refs.html) return
      if (this.__isUpdateSrc) return
      this.__isUpdateSrc = true
      return this.htmlImgLoad().then(() => {
        this.parentWidth = this.$refs.html.parentNode.clientWidth
        this.parentHeight = this.$refs.html.parentNode.clientHeight
        return html2canvas(this.$refs.html, {
          backgroundColor: '#FFFFFF',
          allowTaint: false,
          useCORS: true,
          logging: false
        })
      }).then(canvas => {
        const bata64 = canvasToBata64(canvas)
        if (this.bata64 === bata64) return
        this.bata64 = bata64
        const blob = bata64ToBlob(bata64)
        const src = blobToUrl(blob)
        this.src = src
        // this.src = bata64
      }, () => {
        this.src = ''
        toast('加载失败！')
      }).then(() => {
        this.__isUpdateSrc = false
      })
    }
  },
  mounted () {
    this.update()
    // this.aaaa = setInterval(this.updateSrc, 60)
  },
  destroyed () {
    clearInterval(this.aaaa)
    this.loadingInstance && this.loadingInstance.close()
    this.htmlImgLoadTimer && clearInterval(this.htmlImgLoadTimer)
  }
}
</script>

<style lang="scss" scoped>
.zk-imagehtml-container {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.zk-imagehtml-html {
  position: relative;
  width: 100%;
  user-select: none;
}
.zk-imagehtml-image {
  width: 100%;
  display: block;
}
.zk-imagehtml-hide {
  position: fixed;
  top: -100000000px;
  left: -100000000px;
  // float: left;
}
</style>
