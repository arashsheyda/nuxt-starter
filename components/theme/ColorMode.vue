<template>
  
</template>

<script>
export default {
    name: 't-color-mode',
    methods: {
        toggleDarkMode() {
            if (this.$colorMode.preference !== 'dark') {
                this.$colorMode.preference = 'dark';
            } else {
                this.$colorMode.preference = 'light';
            }
        },
    },
};
</script>

<style lang="scss">

</style>