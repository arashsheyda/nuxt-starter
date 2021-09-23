/* eslint-disable vue/no-v-html */
<template>
<i class="datacon" :class="[color ? `data-${color}` : name]" v-html="require(`~/assets/icons/${family}/${name}.svg?raw`)" />
</template>

<script>
export default {
    name: 'data-icon',
    props: {
        name: {
            type: String,
            required: true,
        },
        family: {
            type: String,
            required: false,
            default: 'feather',
        },
        color: {
            type: String,
            required: false,
            default: null,
        },
    },
};
</script>

<style lang="scss">
.datacon {
    svg {
        height: 1.3rem;
        width: 1.3rem;
        margin-top: 6px;
    }
}

@include customSvg(twitter, #00acee);
@include customSvg(instagram, #8a3ab9);
@include customSvg(dribbble, #ea4c89);
@include customSvg(linkedin, #0077b5);
</style>
