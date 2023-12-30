<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
    <p>{{ $t('greeting', { name: 'John' }) }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('current locale:', this.$i18n.locale)
  }
}
</script>
