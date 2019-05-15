
import ClipboardJS from 'clipboard'
import Queue from '../Queue'

const textareaId = 'clipboardjS_copyText_textarea'
const buttonId = 'clipboardjS_copyText_button'

const textarea = document.createElement('textarea')
const button = document.createElement('button')

textarea.setAttribute('id', textareaId)
textarea.setAttribute('style', 'position: fixed;left: -100000px;top: -100000px;width: 0;overflow: hidden;height: 0;')

button.setAttribute('id', buttonId)
button.setAttribute('style', 'position: fixed;left: -100000px;top: -100000px;width: 0;overflow: hidden;height: 0;')
button.setAttribute('data-clipboard-action', 'copy')
button.setAttribute('data-clipboard-target', `#${textareaId}`)

document.body.appendChild(textarea)
document.body.appendChild(button)

const clipboard = new ClipboardJS(`#${buttonId}`)

let copyTextMap = null

clipboard.on('success', function (e) {
  copyTextMap && copyTextMap.resolve(e)
  copyTextMap = null
})

clipboard.on('error', function (e) {
  copyTextMap && copyTextMap.reject(e)
  copyTextMap = null
})

const copyTextQueue = new Queue(function (task, next) {
  copyTextMap = {
    resolve: e => next(null, e),
    reject: e => next(e)
  }
  textarea.value = task
  button.click()
}, 1)

function copyText (text) {
  return new Promise((resolve, reject) => {
    copyTextQueue.push(text, (error, e) => {
      return error ? reject(error) : resolve(e)
    })
  })
}

export default copyText
