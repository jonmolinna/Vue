<template>
    <tr>
        <td>{{ curso.name }}</td>
        <td>{{ curso.carrera }}</td>
        <td>
            <span @click="deleteCurso(curso.id)">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
            </span>
            <span @click="setArea(curso)">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
            </span>
        </td>
    </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ["curso"],
    computed: {
        ...mapGetters(['areas']),
    },
    methods: {
        ...mapActions(['deleteAreaAction', 'setArea']),

        deleteCurso(id){
            let confirm = window.confirm('¿Estas seguro de Eliminar el curso?')
            if(confirm){
                this.deleteAreaAction(id)
            }
        },
    }
};
</script>