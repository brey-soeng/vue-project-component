<template>
  <div class="wrapper">
    <nav class="flex gap-4 flex-col">
      <RouterLink :to="Trans.i18nRoute({ name: 'home' })">{{ $t('header.home') }}</RouterLink>
      <RouterLink :to="Trans.i18nRoute({ name: 'menu' })">{{ $t('header.menu') }}</RouterLink>
      <RouterLink :to="Trans.i18nRoute({ name: 'trello' })">{{ $t('header.trello') }}</RouterLink>
      <RouterLink :to="Trans.i18nRoute({ name: 'drawer' })">{{ $t('header.drawer') }}</RouterLink>
      <RouterLink :to="Trans.i18nRoute({ name: 'about' })">{{ $t('header.about') }}</RouterLink>
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
