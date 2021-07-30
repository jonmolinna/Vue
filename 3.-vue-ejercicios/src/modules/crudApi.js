import axios from 'axios';

const state = {
    cursos: [],
    curso: {}
};

const getters = {
    allCursos: state => state.cursos,
    getCurso: state => state.curso,
};

const actions = {
    async getCursos({ commit }){
        try {
            let res = await axios.get("http://localhost:5000/cursos");
            let json = await res.data;
            commit('setCursos', json)
            
        } catch (err) {
            console.log(err.response)
        }
    },

    async addCursoAction({ commit }, curso){
        try {
            let options = {
                method: "POST",
                headers: {
                    "content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    id: new Date().getTime(),
                    curso: curso.curso,
                    carrera: curso.carrera
                })
            };

            let res = await axios("http://localhost:5000/cursos", options)
            
            commit('newCurso', res.data);
        } catch (err) {
            console.log(err.response)
        }
    },

    async deleteCursoAction({ commit }, id){
        try {
            let options = {
                method: "DELETE",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                }
            };

            await axios(`http://localhost:5000/cursos/${id}`, options);
            commit('removeCurso', id)
        } catch (err) {
            console.log(err.response)
        }
    },

    async updateCursoAction({ commit }, updateCurso){
        try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    curso: updateCurso.curso,
                    carrera: updateCurso.carrera
                })
            };

            let res = await axios(`http://localhost:5000/cursos/${updateCurso.id}`, options);
            commit('updateCurso', res.data);
        } catch (err) {
            console.log(err.response)
        }
    },

    cursoAction({ commit }, curso){
        commit('actualizarCurso', curso)
    },
};

const mutations = {
    setCursos: (state, cursos) => state.cursos = cursos,
    newCurso: (state, curso) => state.cursos.push(curso),
    removeCurso: (state, id) => state.cursos = state.cursos.filter(curso => curso.id !== id),
    updateCurso: (state, cursoUpdate) => {
        const index = state.cursos.findIndex(curso => curso.id === cursoUpdate.id);
        if(index !== -1){
            state.cursos.splice(index, 1, cursoUpdate)
        }
    },
    actualizarCurso: (state, curso) => state.curso = curso,
};

export default {
    state,
    getters,
    actions,
    mutations
};