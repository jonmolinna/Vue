import regiones from '../data/departamentos.json';
import provincias from '../data/provincias.json';
import distritos from '../data/distritos.json';

const state = {
    regiones: null,
    provincias: null,
    distritos: null,
};

const getters = {
    regiones: state => state.regiones,
    provincias: state => state.provincias,
    distritos: state => state.distritos,
};

const actions = {
    getRegiones({ commit }){
        commit('setRegiones', regiones)
    },

    getRegion({ commit }, idRegion){
        if(!idRegion){
            console.log('Holaaaaa');
        } else {
            let provinciasRegion = provincias.filter(element => element.department_id === idRegion) 
            commit('setProvincias', provinciasRegion)
        }
        console.log(idRegion);
        
    },

    getProvincia({ commit }, idProvincia){
        let distritosProvincia = distritos.filter(element => element.province_id === idProvincia);
        commit('setDistritos', distritosProvincia)
    }
};

const mutations = {
    setRegiones: (state, regiones) => state.regiones = regiones,
    setProvincias: (state, provincias) => state.provincias = provincias,
    setDistritos: (state, distritos) => state.distritos = distritos,
};

export default {
    state,
    getters,
    actions,
    mutations
};