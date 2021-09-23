<template>
  
</template>

<script>
export default {
    name: 't-lang-switcher',
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        },
    },
};
</script>

<style lang="scss">

</style>