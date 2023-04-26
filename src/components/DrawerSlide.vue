<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-20" @close="handleOutsideClick">
      <TransitionChild
        v-if="props.isOverlay || props.closeOutside"
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
      </TransitionChild>
      <div v-else class="fixed inset-0" />
      <!-- end overlay -->
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed flex max-w-full" :class="addClass">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              :enter-from="leaveEnterDirectionFromTo"
              :enter-to="enterLeaveDirectionFromTo"
              :leave-from="enterLeaveDirectionFromTo"
              :leave-to="leaveEnterDirectionFromTo"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
            >
              <DialogPanel class="pointer-events-auto relative" :style="maxWidthPanel">
                <TransitionChild
                  v-if="props.closeOutside"
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-500"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div class="absolute" :class="showCloseOutside">
                    <slot name="closeOutside">
                      <button
                        type="button"
                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-gray-200 active:text-sky-400"
                        @click="handleClose"
                      >
                        <span class="sr-only">Close panel</span>
                        <svg-icon name="Mark" />
                      </button>
                    </slot>
                  </div>
                </TransitionChild>
                <!-- close buttom outside -->
                <div class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll pb-6">
                    <slot name="header">
                      <div
                        v-if="props.title"
                        class="px-4 py-4 sm:px-6"
                        :class="{
                          'sticky top-0 border-b border-gray-200 bg-white z-10': props.stickyHeader
                        }"
                      >
                        <div class="flex items-start justify-between">
                          <slot name="title">
                            <DialogTitle
                              class="text-base font-semibold leading-6 text-gray-900 first-letter:capitalize"
                              >{{ props.title }}</DialogTitle
                            >
                          </slot>
                          <div class="ml-3 flex h-7 items-center" v-if="!props.closeOutside">
                            <slot name="close">
                              <button
                                type="button"
                                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-gray-200 active:text-sky-400"
                                @click="handleClose"
                              >
                                <span class="sr-only">Close panel</span>
                                <svg-icon name="Mark" />
                              </button>
                            </slot>
                          </div>
                        </div>
                      </div>
                    </slot>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <slot />
                    </div>
                  </div>
                  <div
                    v-if="stickyFooter"
                    class="flex flex-shrink-0 justify-end px-4 py-4 sm:px-12"
                  >
                    <slot name="footer">
                      <button
                        type="button"
                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                        @click="handleClose"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Save
                      </button>
                    </slot>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref, watch } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  open: {
    type: Boolean,
    default: false
  },
  isOverlay: {
    type: Boolean,
    default: false
  },
  closeOutside: {
    type: Boolean,
    default: false
  },
  stickyFooter: {
    type: Boolean,
    default: false
  },
  stickyHeader: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: 25
  },
  height: {
    type: [Number, String],
    default: 100
  },
  notAllowedOutside: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: () => 'rtl',
    validator: (value) => {
      return ['rtl', 'ltr', 'ttb', 'btt'].includes(value)
    }
  }
})
const emit = defineEmits(['close'])
const show = ref(props.open)
watch(
  () => props.open,
  (value) => {
    show.value = value
  }
)

const showCloseOutside = computed(() => {
  let addClass = ''
  switch (props.direction) {
    case 'rtl':
      addClass = 'left-0 top-0 -mr-8 flex pr-2 pt-4 sm:-ml-8 sm:pr-4'
      break
    case 'ltr':
      addClass = 'right-0 top-0 -mr-12 flex pr-2 pt-4 sm:-ml-8 sm:pr-4'
      break
    case 'ttb':
      addClass = 'bottom-0 left-0 -mb-12 flex pr-2 pb-4 sm:-mb-12 sm:ml-3'
      break
    case 'btt':
      addClass = 'top-0 left-0 -mt-8 flex pr-2 pb-4 sm:-mt-8 sm:ml-3'
      break
    default:
  }
  return addClass
})

const enterLeaveDirectionFromTo = computed(() => {
  let enterLeaveFromTo = ''
  switch (props.direction) {
    case 'rtl':
      enterLeaveFromTo = 'translate-x-0'
      break
    case 'ltr':
      enterLeaveFromTo = 'translate-x-0'
      break
    case 'ttb':
      enterLeaveFromTo = 'translate-y-0'
      break
    case 'btt':
      enterLeaveFromTo = 'translate-y-0'
      break
    default:
  }
  return enterLeaveFromTo
})

const leaveEnterDirectionFromTo = computed(() => {
  let enterLeaveFromTo = ''
  switch (props.direction) {
    case 'rtl':
      enterLeaveFromTo = 'translate-x-full'
      break
    case 'ltr':
      enterLeaveFromTo = '-translate-x-full'
      break
    case 'ttb':
      enterLeaveFromTo = '-translate-y-full'
      break
    case 'btt':
      enterLeaveFromTo = 'translate-y-full'
      break
    default:
  }
  return enterLeaveFromTo
})

const addClass = computed(() => {
  let direction = []
  switch (props.direction) {
    case 'rtl':
      direction = 'right-0'
      break
    case 'ltr':
      direction = 'left-0'
      break
    case 'ttb':
      direction = 'top-0'
      break
    case 'btt':
      direction = 'bottom-0'
      break
    default:
  }
  return direction
})
const maxWidthPanel = computed(() => {
  if (props.direction === 'ltr' || props.direction === 'rtl') {
    return {
      width: props.width + 'vw',
      height: '100vh'
    }
  } else {
    return {
      width: '100vw',
      height: props.height + 'vh'
    }
  }
})
const handleOutsideClick = () => {
  if (props.notAllowedOutside) {
    return
  }
  emit('close', show.value)
}
const handleClose = () => {
  emit('close', show.value)
}
</script>
