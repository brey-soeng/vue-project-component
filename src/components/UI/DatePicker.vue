<template>
  <VueDatePicker
    :ref="ref"
    :model-value="date"
    @update:model-value="setDate"
    :uid="props.id"
    :clearable="!props.clearable"
    :auto-apply="props.autoApply"
    :close-on-scroll="props.closeOnScroll"
    :placeholder="props.placeholder"
    :no-today="props.noToday"
    :close-on-auto-apply="closeOnAutoApply"
    :markers="props.markers"
    :highlight="highlight"
    :highlight-week-days="heighlightWeekDays"
    :disabled-dates="disableDates"
    :highlight-disabled-days="highlightDisableDays"
    :show-now-button="showNowButton"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :name="name"
    :autocomplete="autocomplete"
    :keep-action-row="keepActionRow"
    :no-swipe="noSwipe"
    :hide-navigation="hideNavigation"
    :action-row="actionRow"
    :disable-year-select="disableYearSelect"
    :close-on-clear-value="closeOnClearValue"
    :range="range"
    :auto-range="autoRange"
    :multi-calendars="multiCalendars"
    :month-picker="monthPicker"
    :time-picker="timePicker"
    :year-picker="yearPicker"
    :week-picker="weekPicker"
    :text-input="textInput"
    :inline="inline"
    :multi-dates="multiDates"
    :preset-ranges="presetRanges"
    :min-range="minRange"
    :max-range="maxRange"
    :fixed-start="fixedStart"
    :fixed-end="fixedEnd"
    :multi-calendars-solo="multiCalendarsSolo"
    :multi-static="multiStatic"
    :mode-height="modeHeight"
    :inline-with-input="inlineWithInput"
    :ignore-time-validation="ignoreTimeValidation"
    :time-picker-inline="timePickerInline"
    :enable-time-picker="!enableTimePicker"
    :position="position"
    :is-24="!is24"
    :enable-seconds="enableSeconds"
    :select-text="selectText"
    :cancel-text="cancelText"
    :now-button-label="nowText"
    input-class-name="datetime-custom-input"
    menu-class-name="datetime-custom-menu"
    calendar-cell-class-name="datetime-custom-cell"
    :format="format"
  ></VueDatePicker>
</template>
<script setup>
import { ref, watch } from 'vue'
const date = ref(props.modelValue)
const emit = defineEmits(['update:modelValue', 'on-click-outside'])
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const props = defineProps({
  nowText: {
    type: String,
    default: 'Now'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  selectText: {
    type: String,
    default: 'Apply'
  },
  enableSeconds: {
    type: Boolean,
    default: false
  },
  is24: {
    type: Boolean,
    default: false
  },
  enableTimePicker: {
    type: Boolean,
    default: false
  },
  timePickerInline: {
    type: Boolean,
    default: false
  },
  ignoreTimeValidation: {
    type: Boolean,
    default: false
  },
  inlineWithInput: {
    type: Boolean,
    default: false
  },
  modeHeight: {
    type: [Number, String],
    default: 255
  },
  multiStatic: {
    type: Boolean,
    default: false
  },
  multiCalendarsSolo: {
    type: Boolean,
    default: false
  },
  fixedEnd: {
    type: Boolean,
    default: false
  },
  fixedStart: {
    type: Boolean,
    default: false
  },
  minRange: {
    type: [Number, String],
    default: null
  },
  maxRange: {
    type: [Number, String],
    default: null
  },
  multiDates: {
    type: Boolean,
    default: false
  },
  textInput: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: 'datepicker'
  },
  name: {
    type: String,
    default: null
  },
  autocomplete: {
    type: String,
    default: null
  },
  modelValue: {
    type: Date,
    default: null
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autoApply: {
    type: Boolean,
    default: false
  },
  closeOnScroll: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: null
  },
  noToday: {
    type: Boolean,
    default: false
  },
  closeOnAutoApply: {
    type: Boolean,
    default: true
  },
  markers: {
    type: Array,
    default() {
      return []
    }
  },
  highlight: {
    type: [Array],
    default() {
      return []
    }
  },
  heighlightWeekDays: {
    type: Array,
    default() {
      return []
    }
  },
  disableDates: {
    type: Array,
    default() {
      return []
    }
  },
  highlightDisableDays: {
    type: Boolean,
    default: false
  },
  showNowButton: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  keepActionRow: {
    type: Boolean,
    default: false
  },
  noSwipe: {
    type: Boolean,
    default: false
  },
  hideNavigation: {
    type: Array,
    default() {
      return []
    }
  },
  actionRow: {
    type: Object,
    default() {
      return {}
    }
  },
  disableYearSelect: {
    type: Boolean,
    default: false
  },
  closeOnClearValue: {
    type: Boolean,
    default: true
  },
  range: {
    type: Boolean,
    default: false
  },
  autoRange: {
    type: [String, Number],
    default: null
  },
  multiCalendars: {
    type: [Boolean, String, Number],
    default: false
  },
  monthPicker: {
    type: Boolean,
    default: false
  },
  timePicker: {
    type: Boolean,
    default: false
  },
  yearPicker: {
    type: Boolean,
    default: false
  },
  weekPicker: {
    type: Boolean,
    default: false
  },
  presetRanges: {
    type: Array,
    default() {
      return []
    }
  },
  position: {
    type: String,
    default: 'center'
  },
  format: {
    type: String,
    default: 'dd/MM/yyyy'
  }
})

watch(
  () => props.modelValue,
  (newValue) => {
    emit('update:modelValue', newValue)
  }
)
const setDate = (value) => {
  date.value = value
  emit('update:modelValue', date.value)
}
</script>
<style lang="scss">
.datetime-custom-menu {
  box-shadow: 0px 0px 8px 1px #dcdbdb !important;
  border: 0px !important;
}
.dp__arrow_top {
  border: 0px;
}
.datetime-custom-input {
  border: 1px solid #eee !important;
  height: 35px;
  &:hover {
    border: 1px solid #0bbcd4 !important;
  }
  &:focus {
    border: 1px solid #0bbcd4 !important;
  }
}
.datetime-custom-cell {
  border-radius: 50% !important;
}
.dp__range_end,
.dp__range_start,
.dp__active_date {
  background: #0bbcd4 !important;
}
.dp__today {
  border: 1px solid #eee !important;
}
.dp__action_cancel {
  border: 1px solid #eeeeee !important;
  padding: 4px 6px !important;
}
.dp__action_button {
  height: auto !important;
}
.dp__action_select {
  padding: 4px 6px !important;
  background: #0bbcd4 !important;
}
</style>
