<template>
  <Field v-slot="{ value }" name="language" as="select" @change="switchLanguage">
    <option value="" disabled>Select a language</option>
    <option
      v-for="language in supportedLocales"
      :key="`locale-${language}`"
      :value="language"
      :selected="value && value.includes(language)"
    >
      {{ t(`locale.${language}`) }}
    </option>
  </Field>
</template>
<script setup>
import { Field } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import Trans from '@/lang/translation'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
const switchLanguage = async (event) => {
  const newLocale = event.target.value
  await Trans.switchLanguages(newLocale)
  try {
    await router.replace({ params: { locale: newLocale } })
  } catch (e) {
    router.push('/')
  }
}

const supportedLocales = Trans.supportedLocales
</script>
