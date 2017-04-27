import axios from '~plugins/axios'
import store from '~store'

export const state = {
  posts: [],
  post: {},
  totalPages: 1,
}

export const mutations = {
  SET_POSTS(state, data) {
    state.posts = data
  },
  SET_PAGES(state, pages) {
    state.totalPages = pages
  },
  SET_POST(state, data) {
    state.post = data
  },
}

export const actions = {
  async FETCH_POSTS ({ state, commit }, page = 1) {
    const start = (page - 1) * 10;
    const limit = start + 10;
    const { data, headers } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    commit('SET_PAGES', headers['x-total-count'] / 10);
    commit('SET_POSTS', data.sort((a, b) => a.id - b.id ).reverse());
  },
  async FETCH_POST ({ commit }, id) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    commit('SET_POST', data);
  }
}
