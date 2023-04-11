<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Trans from '@/lang/translation'
</script>
<template>
  <header>
    <div class="wrapper">
      <nav class="flex">
        <RouterLink :to="Trans.i18nRoute({ name: 'Home' })">{{ $t('header.home') }}</RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'About' })">{{ $t('header.about') }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
