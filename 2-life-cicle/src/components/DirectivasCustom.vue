<template>
    <div>
        <p v-font-size>Lorem ipsum dolor sit.</p>
        <p v-custom-size="40">Lorem ipsum dolor sit 2.</p>
        <p v-custom-sizes:xl>Lorem ipsum dolor sit 3.</p>
        <p v-custom-font.lg.red>Lorem, ipsum dolor. 4</p>
        <p v-custom-font.green.xxl>Lorem, ipsum dolor. 4</p>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>