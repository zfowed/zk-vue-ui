<template>
  <div id="app">
    <div>asdasd</div>
    <zk-date-picker >
    </zk-date-picker>
    <zk-button border @click="layer = !layer">s</zk-button>
    <zk-button border @click="$toast('asd')">$toast</zk-button>
    <zk-button border @click="toast = !toast">toast</zk-button>
    <zk-button border @click="$message('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')">$message</zk-button>
    <zk-button border @click="dialog = !dialog">dialog</zk-button>
    <zk-button border @click="$msgbox.alert('asd')">$msgbox.alert</zk-button>
    <zk-button border @click="$msgbox.confirm('asd')">$msgbox.confirm</zk-button>
    <zk-button border @click="imageview = !imageview">imageview</zk-button>
    <zk-link disabled>四十多岁的</zk-link>
    <zk-pagination :total="100"></zk-pagination>
    <zk-radio v-model="radio" label="123"></zk-radio>
    <zk-radio v-model="radio" label="1232"></zk-radio>
    <zk-checkbox v-model="checkbox" true-label="123">备选项</zk-checkbox>
    <zk-checkbox v-model="checkbox" true-label="1232">备选项</zk-checkbox>
    <zk-popup-layer :visible.sync="layer" placement="left">
      <div style="height: 100px; width: 100%; background: #fff; box-shadow: 0 0 5px #f55;">备选项</div>
    </zk-popup-layer>
    <zk-toast :visible.sync="toast">
      <div>asdas</div>
    </zk-toast>
    <zk-dialog :visible.sync="dialog">
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
      <p>啊实打实</p>
    </zk-dialog>
    <zk-image-view
      :visible.sync="imageview"
      src="http://www.zfowed.com/static/img/avatar.jpg"
      :src-list="[
        'http://www.zfowed.com/static/img/avatar.jpg',
        'http://www.zfowed.com/static/img/25025.jpg'
      ]">
    </zk-image-view>
    <zk-image-select>
      <span slot="label">哈哈</span>
      <span slot="select-label">重新选择</span>
    </zk-image-select>
    <zk-image-upload :http-request="httpRequest">
      <span slot="label">哈哈</span>
      <span slot="select-label">重新选择</span>
    </zk-image-upload>
    <zk-notice :delay="3000" :row="2" :duration="600">
      <zk-notice-item>一一一一一一一一一</zk-notice-item>
      <zk-notice-item>二二二二二二二二二</zk-notice-item>
      <zk-notice-item>三三三三三三三三三</zk-notice-item>
      <zk-notice-item>四四四四四四四四四</zk-notice-item>
    </zk-notice>
    <zk-html-image>
      <zk-table>
        <zk-table-head>
          <zk-table-tr>
            <zk-table-th>日期</zk-table-th>
            <zk-table-th>姓名</zk-table-th>
            <zk-table-th>地址</zk-table-th>
          </zk-table-tr>
          </zk-table-head>
        <zk-table-body>
          <zk-table-tr v-for="i in 3" :key="i">
            <zk-table-td>2019-05-08</zk-table-td>
            <zk-table-td>不瞭望的怪人</zk-table-td>
            <zk-table-td>你猜不到~猜不到~</zk-table-td>
          </zk-table-tr>
        </zk-table-body>
      </zk-table>
    </zk-html-image>
    <zk-countdown date="2019-12-15"></zk-countdown>
    <zk-swiper class="banner-swiper" :options="{ }">
      <zk-swiper-slide class="banner-swiper-slide">
        <img src="http://www.zfowed.com/static/img/avatar.jpg">
      </zk-swiper-slide>
      <zk-swiper-slide class="banner-swiper-slide">
        <img src="http://www.zfowed.com/static/img/25025.jpg">
      </zk-swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </zk-swiper>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      layer: false,
      toast: false,
      dialog: false,
      imageview: false,
      radio: '123',
      checkbox: '123',
      form: {
        phone: '',
        phone2: ''
      },
      rules: {
        phone: [{
          type: 'string',
          message: '手机号码不允许为空',
          required: true,
          whitespace: true
        }, {
          message: '请输入正确的手机号码',
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        }]
      },
      httpRequest ({ data, onProgress, onSuccess, onError }) {
        function formDataAppend (formData, key, value) {
          if (Array.isArray(value)) {
            for (const item of value) {
              formDataAppend(formData, `${key}[]`, item)
            }
          } else if (typeof value === 'object' && !(value instanceof File) && !(value instanceof Blob)) {
            for (const itemKey of Object.keys(value)) {
              formDataAppend(formData, `${key}[${itemKey}]`, value[itemKey])
            }
          } else {
            formData.append(key, value)
          }
        }
        function objectToFormData (data) {
          const formData = new FormData()
          for (const key of Object.keys(data)) {
            formDataAppend(formData, key, data[key])
          }
          return formData
        }
        axios({
          url: '/api-user/store/uploadContactQr',
          method: 'post',
          baseURL: 'https://apitest.znnkee.com/v1',
          responseType: 'json',
          data: objectToFormData(Object.assign({}, data, {
            token: 'eyJleHBpcmVUaW1lIjoxNTU4NzY3MjYxMDQ0LCJyb2xlSWQiOjAsImFjY291bnRJbmZvSWQiOjI4LCJzdG9yZUlkIjoyOCwidXNlcklkIjoyOH0.GaEohlz7qAdp3bGMuqVRJlrccP6VP_BdpP280o_c54I'
          })),
          onUploadProgress: onProgress
        }).then(result => {
          return onSuccess(result.data.data.url)
        }, error => onError(error))
      }
    }
  },
  methods: {
    handleSelectionChange () {
      console.log(arguments)
    }
  },
  mounted () {
    window.form = this.$refs.form
  }
}
</script>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
