<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-300 "
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          :id="id"
          :class="addClass"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg border border-opacity-50"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0" v-if="type">
                <CheckCircleIcon
                  v-if="type === 'success'"
                  class="h-6 w-6 text-success-500 hover:text-success-600"
                  aria-hidden="true"
                />
                <InformationCircleIcon
                  v-else-if="type === 'info'"
                  class="h-6 w-6 text-default-500 hover:text-default-600"
                  aria-hidden="true"
                />
                <ExclamationTriangleIcon
                  v-else-if="type === 'warning'"
                  class="h-6 w-6 text-warning-500 hover:text-warning-600"
                  aria-hidden="true"
                />
                <XCircleIcon
                  v-else-if="type === 'danger'"
                  class="h-6 w-6 text-danger-500 hover:text-danger-600"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-default-900">{{ title }}</p>
                <p class="mt-1 text-sm text-default-500 font-normal break-all">{{ message }}</p>
                <div class="mt-3 flex space-x-7" v-if="isDismiss">
                  <button
                    @click="handleUndo"
                    v-if="btn_label_1"
                    type="button"
                    class="rounded-sm first-letter:capitalize bg-white text-sm px-1 font-medium text-danger-600 hover:text-danger-500 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-2"
                  >
                    <span v-if="!dismisLoading">{{ btn_label_1 }}</span>
                    <span v-else class="flex gap-2 text-sm items-center">
                      <ArrowPathIcon
                        class="h-4 w-4 text-danger-500 animate-spin hover:text-danger-600"
                        aria-hidden="true"
                      />
                      Processing...</span
                    >
                  </button>
                  <button
                    @click="handleConfirm"
                    v-if="btn_label_2"
                    type="button"
                    class="rounded-sm first-letter:capitalize bg-white text-sm px-1 font-medium text-primary-700 hover:text-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <span v-if="!confirmLoading">{{ btn_label_2 }}</span>
                    <span v-else class="flex gap-2 text-sm items-center">
                      <ArrowPathIcon
                        class="h-4 w-4 text-primary-500 animate-spin hover:text-primary-600"
                        aria-hidden="true"
                      />
                      Processing...</span
                    >
                  </button>
                </div>
              </div>
              <div class="ml-4 flex flex-shrink-0" v-if="showClose">
                <button
                  type="button"
                  @click="handleHide"
                  class="inline-flex rounded-sm bg-white text-default-400 hover:text-default-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon
                    class="h-5 w-5 hover:text-primary-600 text-primary-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

import { XMarkIcon } from '@heroicons/vue/20/solid'
export default {
  components: {
    CheckCircleIcon,
    XMarkIcon,
    InformationCircleIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    ArrowPathIcon
  },
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    type: { type: String, default: '' },
    position: { type: String, default: 'top' },
    showClose: { type: Boolean, default: true },
    duration: { type: [String, Number], default: 1000 },
    id: { type: [Number, String], default: +new Date() },
    isDismiss: { type: Boolean, default: false },
    btn_label_1: { type: String, default: 'Undo' },
    btn_label_2: { type: String, default: 'Dismiss' },
    onHide: { type: Function, default: null },
    onUndo: { type: Function, default: null },
    onConfirm: { type: Function, default: null },
    loading: { type: [Object, Boolean], default: false }
  },
  data() {
    return { show: false, confirmLoading: false, dismisLoading: false }
  },
  computed: {
    addClass() {
      let styles = ''
      switch (this.type) {
        case 'success':
          styles = 'border-success-700'
          break
        case 'info':
          styles = 'border-default-700'
          break
        case 'danger':
          styles = 'border-danger-700'
          break
        case 'warning':
          styles = 'border-warning-700'
          break
        default:
          styles = 'border-primary-700'
          break
      }
      return styles
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
      if (!this.isDismiss) {
        this.hideNotification()
      }
    }, 100)
  },
  methods: {
    hideNotification() {
      if (this.duration) {
        setTimeout(() => {
          this.show = false
          this.$el.parentNode.removeChild(this.$el)
        }, this.duration)
      }
    },
    handleHide() {
      this.show = false
      if (typeof this.onHide === 'function') this.onHide()
    },
    async handleUndo() {
      if (typeof this.onUndo === 'function' && this.onUndo) {
        try {
          this.dismisLoading = this.loading
          await this.onUndo()
          this.dismisLoading = false
          await this.handleHide()
        } catch (error) {
          this.dismisLoading = false
        }
      } else {
        await this.handleHide()
      }
    },
    async handleConfirm() {
      if (typeof this.onConfirm === 'function' && this.onConfirm) {
        try {
          this.confirmLoading = this.loading
          await this.onConfirm()
          this.confirmLoading = false
          await this.handleHide()
        } catch (error) {
          this.confirmLoading = false
        }
      } else {
        await this.handleHide()
      }
    }
  }
}
</script>
