import ImageUpload from './src/image-upload'

ImageUpload.install = function (Vue) {
  Vue.component(ImageUpload.name, ImageUpload)
}

export default ImageUpload
