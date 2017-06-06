import axios from '~plugins/axios'
import moment from '~plugins/moment'
import store from '~store'

export const state = {
  posts: [],
  post: {},
  totalPages: 1
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
    /* eslint-disable */
    const limit = start + 10;
    const { data, headers } = await axios.get(`https://dieguin-blog-api.herokuapp.com/articles?page=${page}&limit=${limit}&sort=-createdAt`);
    const normalizedData = data.map((post) => {
      const date = moment(post.updatedAt).fromNow();
      post.updatedAt = date;
      return post; 
    });
    commit('SET_PAGES', normalizedData.length / 10);
    commit('SET_POSTS', normalizedData);
  },
  async FETCH_POST ({ state, commit }, permalink) {
    const { data } = await axios.get(`https://dieguin-blog-api.herokuapp.com/articles/${permalink}`)
    data.updatedAt = moment(data.updatedAt).fromNow();
    commit('SET_POST', data);

  }
}
