import axios from 'axios';

const state = {
    artist: null,
    loading: false,
};

const getters = {
    artist: state => state.artist,
    loading: state => state.loading,
};

const actions = {
    async getArtist({ commit }, nameArtista){
        commit('setLoading1')
        try {
            let res = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${nameArtista}`);
            let json = res.data;
            let { artists } = json;
            let artist = artists[0]
            //console.log(artist);
            commit('setArtist', artist)
        } catch (err) {
            console.log(err.response);
            commit('setArtist', {})
        } finally {
            commit('setLoading2')
        }
    }
};

const mutations = {
    setLoading1: state => state.loading = true,
    setLoading2: state => state.loading = false,
    setArtist: (state, artist) => state.artist = artist,
};

export default {
    state,
    getters,
    actions,
    mutations
};