const getDefaultState = () => {
  return {
    email: '',
    name: '',
    phoneNumber: '',
    role: 10
  }
};
  // const state = getDefaultState()
const state = () => ({
  email: '',
  name: '',
  phoneNumber: '',
  role: 10
});

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_ACCOUNT: (state, account) => {
    console.log(account)
    state.email = account.email
    state.name = account.name
    state.phoneNumber = account.phoneNumber
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
};

const actions = {
  resetState({ commit }) {
    return new Promise(() => {
      commit('RESET_STATE')
    })
  },
  setAccount({ commit }, account) {
    commit('SET_ACCOUNT', account)
  },
  setRole({commit}, role){
    commit('SET_ROLE', role)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // getters
}