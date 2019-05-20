import ImageContainer from './src/image-container.vue'

ImageContainer.install = function (Vue) {
  Vue.component(ImageContainer.name, ImageContainer)
}

export default ImageContainer
