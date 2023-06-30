<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="handleClose">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-default-900 bg-opacity-60 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-3 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white dark:bg-dark dark:text-default-400 dark:border dark:border-default-600 px-4 py-3 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-4"
            >
              <div class="flex justify-between items-center">
                <slot name="header">
                  <h1
                    v-if="props.title"
                    as="h3"
                    class="text-lg font-semibold leading-6 text-gray-900"
                  >
                    {{ props.title }}
                  </h1>
                  <button
                    v-if="!props.showClose"
                    type="button"
                    class="rounded-md bg-white dark:bg-dark text-gray-400 hover:text-primary-600"
                    @click="handleClose"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </slot>
              </div>
              <div class="py-2">
                <slot />
              </div>
              <div class="sm:flex sm:justify-end items-center first-letter:capitalize gap-x-2">
                <slot name="footer">
                  <button
                    v-ripple
                    type="button"
                    @click="handleClose"
                    class="bg-default-300 bg-opacity-50 dark:bg-[#424659] dark:hover:bg-opacity-75 hover:bg-default-200 hover:bg-opacity-75 text-default-400 rounded py-2 px-4 text-sm first-letter:capitalize"
                  >
                    Cancel
                  </button>
                  <button
                    v-ripple
                    type="button"
                    @click="handleSubmit"
                    class="bg-primary-500 rounded py-2 px-4 text-sm first-letter:capitalize text-white hover:bg-primary-600"
                  >
                    confirm
                  </button>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  showClose: { type: Boolean, default: false },
  title: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue', 'submit'])
watch(
  () => props.modelValue,
  (newVal) => {
    open.value = newVal
    emit('update:modelValue', newVal)
  }
)
const open = ref(props.modelValue)
const handleClose = () => {
  emit('update:modelValue', false)
}
const handleSubmit = () => {
  emit('submit')
}
</script>
