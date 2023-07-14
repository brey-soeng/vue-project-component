<template>
  <div class="relative">
    <div @click="handleFocus">
      <UiInput
        name="datepicker"
        placeholder="Select date"
        suffixIcon="Datepicker"
        suffixIconSize="22"
        :modelValue="datepicker"
      />
    </div>
    <div v-if="isCustomDate" v-click-outside="handleClickOutside">
      <Transition name="dropdown-animate">
        <div
          class="bg-white rounded absolute z-50 mt-1 w-96 right-0 shadow transition-all dropdown-animate"
        >
          <div class="flex justify-between items-center px-4 py-4">
            <h1 class="font-semibold text-[20px] text-black">Period</h1>
            <UiSvgIcon
              name="Close"
              size="14"
              class="text-primary cursor-pointer hover:text-opacity-75"
              @click="handleClose"
            />
          </div>
          <div class="border-b border-gray-200 px-4 py-4">
            <ul class="list-none flex flex-wrap gap-2">
              <template v-for="(datetime, index) in customDatepicker" :key="index">
                <li
                  :class="[
                    datetime.id === 1 ? 'w-9 h-9 py-2 px-2' : 'py-2 px-4',
                    {
                      'bg-primary border-transparent text-white': datetimeIndex === index
                    }
                  ]"
                  class="rounded-full cursor-pointer flex justify-center items-center py-2 px-2 text-[12px] font-medium border border-gray-200"
                  @click="handleCustomDatepicker(index)"
                >
                  {{ datetime.name }}
                </li>
              </template>
            </ul>
          </div>
          <div v-if="isFromToDate">
            <div class="border-b border-gray-200 px-4 py-4 grid grid-cols-2 gap-3">
              <div>
                <h1 class="text-[12px] font-normal text-[#6E6E73] pb-2">From</h1>
                <UiDatepicker
                  v-model="startDate"
                  placeholder="Select date"
                  autoApply
                  enableTimePicker
                  position="left"
                  format="dd MMM yyyy"
                />
              </div>
              <div>
                <h1 class="text-[12px] font-normal text-[#6E6E73] pb-2">To</h1>
                <UiDatepicker
                  v-model="endDate"
                  placeholder="Select date"
                  autoApply
                  enableTimePicker
                  position="left"
                  format="dd MMM yyyy"
                />
              </div>
            </div>
            <div class="border-b border-gray-200 px-4 py-4 flex justify-end">
              <div class="w-40">
                <UiButton
                  label="Apply"
                  fullWidth
                  defaultType="primary"
                  background
                  @click="handleAppyDate"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
import { watch, ref } from 'vue'
import { endOfMonth, startOfMonth, subMonths } from 'date-fns'
import { formatDate } from '@/utils'
const props = defineProps({
  modelValue: {
    type: [String, Date, Array],
    default: null
  }
})
watch(
  () => props.modelValue,
  (value) => {
    datepicker.value = value
  }
)

const emit = defineEmits(['update:modelValue'])
const datepicker = ref(props.modelValue)
const startDate = ref(null)
const endDate = ref(null)
const isCustomDate = ref(false)
const datetimeIndex = ref()
const isFromToDate = ref(false)
const customDatepicker = ref([
  { id: 1, name: 'All' },
  { id: 2, name: 'Last 7 days' },
  { id: 3, name: 'Last 30 days' },
  { id: 4, name: ' Custom range' }
])
const handleFocus = () => {
  isCustomDate.value = !isCustomDate.value
}
const handleClose = () => {
  isCustomDate.value = false
}
const handleClickOutside = () => {
  isCustomDate.value = false
}
const handleCustomDatepicker = (index) => {
  datetimeIndex.value = index
  switch (index) {
    case 0:
      datepicker.value = null
      isFromToDate.value = false
      emit('update:modelValue', datepicker.value)
      clearDate()
      break
    case 1:
      isFromToDate.value = false
      const startDate = new Date()
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
      datepicker.value = [formatDate(startDate) + ' - ' + formatDate(endDate)]
      emit('update:modelValue', datepicker.value)
      clearDate()
      break
    case 2:
      isFromToDate.value = false
      const startMonth = startOfMonth(subMonths(new Date(), 1))
      const endMonth = endOfMonth(subMonths(new Date(), 1))
      datepicker.value = [formatDate(startMonth) + ' - ' + formatDate(endMonth)]
      emit('update:modelValue', datepicker.value)
      clearDate()
      break
    case 3:
      isFromToDate.value = !isFromToDate.value
      break
    default:
      break
  }
}

const clearDate = () => {
  startDate.value = null
  endDate.value = null
}

const handleAppyDate = () => {
  if (!startDate.value || !endDate.value) {
    return
  }
  datepicker.value = [formatDate(startDate.value) + ' -  ' + formatDate(endDate.value)]
  emit('update:modelValue', datepicker.value)
  isCustomDate.value = false
}
</script>
