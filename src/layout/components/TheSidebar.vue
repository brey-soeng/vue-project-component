<template>
  <div class="wrapper">
    <nav class="flex gap-4 flex-col">
      <RouterLink :to="Trans.i18nRoute({ name: 'home' })"
        ><span class="text-ellipsis text-nowrap">{{ $t('header.home') }}</span></RouterLink
      >
      <RouterLink :to="Trans.i18nRoute({ name: 'menu' })"
        ><span class="text-ellipsis text-nowrap">{{ $t('header.menu') }}</span></RouterLink
      >
      <RouterLink :to="Trans.i18nRoute({ name: 'trello' })"
        ><span class="text-ellipsis text-nowrap">{{ $t('header.trello') }}</span></RouterLink
      >
      <RouterLink :to="Trans.i18nRoute({ name: 'drawer' })"
        ><span class="text-ellipsis text-nowrap">{{ $t('header.drawer') }}</span></RouterLink
      >
      <RouterLink :to="Trans.i18nRoute({ name: 'about' })"
        ><span class="text-ellipsis text-nowrap">{{ $t('header.about') }}</span></RouterLink
      >
      <RouterLink :to="Trans.i18nRoute({ name: 'notification' })">{{
        $t('header.notification')
      }}</RouterLink>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import Trans from '@/lang/translation'
</script>
