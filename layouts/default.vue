<template>
<div :class="$colorMode.value == 'Dark' ? 'dark-mode' : ''">

    <transition name="fade">
        <TPreloader v-if="preloader" />
    </transition>

    <DataHeader />

    <Nuxt keep-alive />

    <DataFooter />

    <transition name="fade-up">
        <TScrollToTop v-if="scrollPosition > 77" />
    </transition>

</div>
</template>

<script>
import DataHeader from '~/includes/header';
import DataFooter from '~/includes/footer';

export default {
    name: 'data-layout',
    components: {
        DataHeader,
        DataFooter,
    },
    data() {
        return {
            scrollPosition: 0,
            preloader: true,
        };
    },
    beforeCreate() {
        this.preloader = true;
    },
    mounted() {
        setTimeout(() => {
            this.preloader = false;
        }, 1500);
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    head() {
        const i18nHead = this.$nuxtI18nHead({
            addSeoAttributes: true,
        });
        return {
            bodyAttrs: {
                class: [
                    this.preloader ? 'overflow-hidden' : '',
                ],
            },
            htmlAttrs: {
                ...i18nHead.htmlAttrs,
            },
            meta: [...i18nHead.meta],
            link: [...i18nHead.link],
        };
    },
};
</script>

<style lang="scss">

</style>
