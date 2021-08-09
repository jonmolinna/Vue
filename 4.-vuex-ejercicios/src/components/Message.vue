<template>
    <div class="message">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    props: ["msg", "bgColor"]
};
</script>

<style scoped>
    .message {
        padding: 1rem;
        margin-bottom: 1rem;
        text-align: center;
        color: #fff;
        font-weight: bold;
        background-color: #dc3545;
    }
</style>