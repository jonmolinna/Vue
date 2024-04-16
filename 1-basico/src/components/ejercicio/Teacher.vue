<template>
    <section>
        <p>Añadir Profesores</p>
        <div>
            <div>
                <label>Nombre:</label>
                <input type="text" v-model="initialForm.name" >
            </div>
            <div>
                <label>Apellidos:</label>
                <input type="text" v-model="initialForm.surname" >
            </div>
            <div>
                <label>DNI:</label>
                <input type="text" v-model="initialForm.dni" >
            </div>
            <div>
                <label>Materiales: </label>
                <input text="text" v-model="subject" >
                <button @click="handleSubject()">Agregar</button>
                <div>
                    <ul>
                        <li v-for="(element, index) in initialForm.subjects" :key="index">{{ element }}</li>
                    </ul>
                </div>
            </div>
            <input type="checkbox" v-model="initialForm.doc" > Documentacion Entregada
            <br>
            <button @click="handleAddTeacher()">Agregar</button>
        </div>
    </section>
    <section>
        <p>Lista de Docentes</p>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentacion Entregada</th>
            </tr>
            <tr v-for="teacher in teachers" :key="teacher.dni">
                <th>{{  teacher.name }}</th>
                <th>{{  teacher.surname }}</th>
                <th>{{  teacher.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in teacher.subjects" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </th>
                <th v-if="teacher.doc">Entregada</th>
                <th v-else>No Entregada</th>
            </tr>
        </table>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    interface teacherInterface {
        name: string;
        surname: string;
        dni: string,
        subjects: Array<string>;
        doc: boolean;
    }

    export default defineComponent({
        name: 'TeacherForm',
        components: {},
        data() {
            let initialForm: teacherInterface = { name: '', surname: '', dni: '', subjects: [], doc: false };
            let teachers: teacherInterface[] = [];
            let subject = '';

            return {
                initialForm,
                teachers,
                subject,
            }
        },
        methods: {
            handleSubject(){
                this.initialForm.subjects.push(this.subject);
                this.subject = '';
            },
            handleAddTeacher() {
                this.teachers.push({
                    name: this.initialForm.name,
                    surname: this.initialForm.surname,
                    dni: this.initialForm.dni,
                    subjects: this.initialForm.subjects,
                    doc: this.initialForm.doc
                });

                this.initialForm.name = "";
                this.initialForm.surname = "";
                this.initialForm.subjects = [];
            },
        }
    })
</script>

<style></style>