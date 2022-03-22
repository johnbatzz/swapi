import ApiService from "../../services/api.service";

// action types
export const GET_FILMS = 'getTopAnime';
export const GET_STARSHIPS = 'getStarships';

// mutation types
export const SET_FILMS = 'setTopAnime';
export const SET_STARSHIPS = 'setStartships';

const state = {
  films: [],
  starships: [],
  total: 0
};

const getters = {
  films(state) {
      return state.films;
  },
  starships(state) {
    return state.starships
  }
};

const actions = {
  [GET_FILMS](context) {
      new Promise(resolve => {
        ApiService.get('http://localhost:3000/films').then((response) => {
            console.log('response : ', response);
            context.commit(SET_FILMS, response.results);
            resolve('OK');
        })
      })
  },
  [GET_STARSHIPS](context) {
    new Promise(resolve => {
      ApiService.get('http://localhost:3000/starships').then((response) => {
        console.log('response : ', response);
          context.commit(SET_STARSHIPS, response.results);
          resolve('OK');
      })
    })
}
};

const mutations = {
  [SET_FILMS](state, payload) {
      state.films = payload.sort((a, b) => {
        return (new Date(b.release_date)).getTime() - (new Date(a.release_date).getTime())
      });
  },
  [SET_STARSHIPS](state, payload) {
      state.starships = payload.sort((a, b) => parseFloat(a.length.replace(/,/g, '')) - parseFloat(b.length.replace(/,/g, '')));
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
