import axios from 'axios';

const state = {
    cursos: []
};

const getters = {
    allCursos: state => state.cursos
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
    }
};

const mutations = {
    setCursos: (state, cursos) => state.cursos = cursos,
    newCurso: (state, curso) => state.cursos.push(curso),
    removeCurso: (state, id) => state.cursos = state.cursos.filter(curso => curso.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
};