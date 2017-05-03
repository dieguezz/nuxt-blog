import axios from '~plugins/axios'
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
    const { data } = await axios.get('/posts/posts.json');
    const start = (page - 1) * 10;
    const limit = start + 10;
    const posts = data
      .sort((a, b) => a.date - b.date )
      .reverse()
      .slice(start, limit);

    commit('SET_PAGES', data.length / 10);
    commit('SET_POSTS', posts);
  },
  async FETCH_POST ({ state, commit }, permalink) {
    function isPost(post) {
      return post.meta.permalink === permalink;
    }
    const post = state.posts.find((i) => isPost(i));
    const { data } = await axios.get('/posts' + post.md);
    post.content = data;

    commit('SET_POST', post);
  }
}
