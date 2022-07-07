import { toasts } from 'svelte-toasts'
let allToasts

const toast = (title, type) => {
  if (title?.message) title = title?.message
  allToasts?.remove()
  allToasts = toasts.add({
    title: title,
    description: '',
    duration: 5000, // 0 or negative to avoid auto-remove
    type: type || 'info',
    theme: 'dark',
    placement: 'top-center',
    showProgress: false,
    onClick: () => {},
    onRemove: () => {},
    // component: BootstrapToast, // allows to override toast component/template per toast
  })
}
const removeToasts = (toast) => {
  allToasts.remove()
}
export { toast, removeToasts }
