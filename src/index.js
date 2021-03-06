import Dialog from './dialog'
import Alert from './alert'
import Confirm from './confirm'

import './dialog.less'

Dialog.install = function (Vue, options = {}) {
  Vue.component(options.dialogName || Dialog.name, Dialog)
  Vue.prototype['$' + (options.alertName || 'alert')] = Alert
  Vue.prototype['$' + (options.confirmName || 'confirm')] = Confirm
}

export {
  Dialog as default,
  Dialog,
  Alert,
  Confirm
}
