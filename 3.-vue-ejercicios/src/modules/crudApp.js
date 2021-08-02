const state = {
    areas: [],
    cursoEdit: {},
};

const getters = {
    areas: state => state.areas,
    cursoEdit: state => state.cursoEdit,
};

const actions = {
    addAreaAction({ commit }, curso){
        commit("addArea", curso)
    },
    deleteAreaAction({ commit }, id){
        commit("deleteArea", id)
    },
    setArea({ commit }, curso){
        commit('setCursoEdit', curso)
    },
    updateAreaAction({ commit }, curso){
        commit('updateArea', curso)
    },
};

const mutations = {
    addArea: (state, curso) => state.areas.push(curso),
    deleteArea: (state, id) => state.areas = state.areas.filter(curso => curso.id !== id),
    setCursoEdit: (state, curso) => state.cursoEdit = curso,
    updateArea: (state, cursoEdit) => {
        const index = state.areas.findIndex(curso => curso.id === cursoEdit.id);
        if(index !== -1){
            state.areas.splice(index, 1, cursoEdit)
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};