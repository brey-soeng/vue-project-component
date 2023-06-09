<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route?.meta?.transition">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>
<style lang="postcss" scoped>
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
  transition: opacity 0.4s;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  /* animation: slide-out 0.3s ease-in forwards; */
  /* transition: opacity 0.4s; */
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(80%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(80%);
  }
  to {
    transform: translateX(-80%);
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
  animation: fade-in 0.5s ease-in forwards;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  /* animation: fade-out 0.2s ease-out forwards; */
}
@keyframes fade-in {
  from {
    opacity: 0.3;
    transform: translateY(2%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
</style>
