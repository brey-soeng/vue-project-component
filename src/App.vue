<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Trans from '@/lang/translation'
</script>
<template>
  <header>
    <div class="wrapper">
      <nav class="flex gap-4">
        <RouterLink :to="Trans.i18nRoute({ name: 'Home' })">{{ $t('header.home') }}</RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'About' })">{{ $t('header.about') }}</RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'drawer' })">{{ $t('header.drawer') }}</RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'menu' })">{{ $t('header.menu') }}</RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'trello' })">{{ $t('header.trello') }}</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
