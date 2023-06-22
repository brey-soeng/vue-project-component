<template>
  <div>
    <button class="ripple-class" @click="handleClick" v-click-outside="handleClickOutside" v-ripple>
      <div class="rounded-full flex justify-center items-center relative">
        <img src="@/assets/img/avatar.png" alt="" class="w-9 h-9 rounded-full bg-cover" />
        <span
          class="w-3 h-3 border-2 border-white rounded-full absolute bottom-0 z-10 right-0 bg-success-500"
        ></span>
      </div>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <ul
        v-if="visible"
        class="list-none border-default-200 dark:bg-dark dark:text-white mt-2 dark:border-default-500 p-0 absolute right-0 z-10 ease-in-out duration-300 w-56 bg-white text-default-500 border rounded"
      >
        <div>
          <div class="py-3 px-2">
            <div class="flex justify-start items-center gap-3 dark:text-default-300 relative">
              <div class="rounded-full flex justify-center items-center relative">
                <img src="@/assets/img/avatar.png" alt="" class="w-9 h-9 rounded-full bg-cover" />
                <span
                  class="w-3 h-3 border-2 border-white rounded-full absolute bottom-0 z-30 right-0 bg-success-500"
                ></span>
              </div>
              <h1 class="flex flex-col justify-start font-medium text-base capitalize">
                <span>Jonh Doe</span>
                <span class="text-xs first-letter:capitalize">admin</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="border-t border-b dark:border-default-500 border-default-200">
          <div class="py-3 px-2">
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <UserIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">profile</span>
              </li>
            </router-link>
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <Cog6ToothIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">Settings</span>
              </li>
            </router-link>
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <CreditCardIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">Billing</span>
              </li>
            </router-link>
          </div>
        </div>
        <div class="border-b dark:border-default-500 border-default-200">
          <div class="py-3 px-2">
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <QuestionMarkCircleIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">Help</span>
              </li>
            </router-link>
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <CurrencyDollarIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">Pricing</span>
              </li>
            </router-link>
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <InformationCircleIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">FAQ</span>
              </li>
            </router-link>
          </div>
        </div>
        <div>
          <div class="py-3 px-2">
            <router-link to="/">
              <li
                class="flex flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
              >
                <ArrowRightOnRectangleIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="first-letter:capitalize">Logout</span>
              </li>
            </router-link>
          </div>
        </div>
      </ul>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  CreditCardIcon
} from '@heroicons/vue/24/outline'
const visible = ref(false)
const handleClick = () => {
  visible.value = !visible.value
}

const handleClickOutside = () => {
  visible.value = false
}
</script>
