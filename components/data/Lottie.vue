<template>
<lottie :width="width" :height="height" :options="lottieOptions" @:animCreated="handleAnimation" />
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue';

export default {
    name: 'data-lottie',
    components: {
        lottie,
    },
    props: {
        animation: {
            type: undefined,
            required: true,
        },
        width: {
            type: Number,
            required: false,
            default: 240,
        },
        height: {
            type: Number,
            required: false,
            default: 240,
        },
    },
    data() {
        return {
            lottieOptions: {
                animationData: this.animation,
            },
        };
    },
    methods: {
        handleAnimation(anim) {
            this.anim = anim;
        },
    },
};
</script>

<style lang="scss">

</style>
