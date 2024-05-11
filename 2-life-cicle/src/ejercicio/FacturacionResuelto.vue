<template>
    <div>
        <label for="">Sub Total</label>
        <input type="number" v-model="subtotal">
        <h3>Total impuesto a pagar: {{ totalVat }}</h3>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref, computed } from 'vue';

    const vat = 21
    let subtotal: Ref<number> = ref(0);
    const totalVat = computed(() => (vat * subtotal.value) / 100);

</script>

<style scoped></style>