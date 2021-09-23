<template>
<div class="pbp content-placeholders content-placeholders-is-rounded content-placeholders-is-animated">
    <div class="content-placeholders-imgage" :style="{height: `${hegiht}px`}"></div>
</div>
</template>

<script>
export default {
    name: 'ph-image',
    props: {
        type: Number,
        required: true,
    },
};
</script>

<style lang="scss">
.content-placeholders-imgage {
    position: relative;
    overflow: hidden;
    height: 15px;
    background: #eee;
    width: 100%;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-width: 1000px;
        height: 100%;
        background: linear-gradient(to right, transparent 0%, #e1e1e1 15%, transparent 30%);
        animation: contentPlaceholdersAnimation 1.5s linear infinite forwards;
    }
}
</style>
