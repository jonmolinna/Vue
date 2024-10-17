<template>
    <form>
        <div class="mb-3">
            <label for="note" class="form-label">My Note</label>
            <input type="text" class="form-control" id="note" v-model="content">
        </div>
        <button type="submit" class="btn btn-success" @click.prevent="handleSubmit">Submit</button>
        <p>{{ feedback }}</p>
    </form>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import useAuth from '@/store/auth';
    import router from '@/router';

    const store = useAuth();
    const content = ref('');
    const feedback = ref('');

    const handleSubmit = async () => {
        const response = await store.createNotes(content.value);

        if (response === false) {
            feedback.value = 'Error recoding the note';
        }
        else {
            router.push({name: 'note'})
        }
    }

</script>



