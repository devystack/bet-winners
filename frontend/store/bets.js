const getDefaultState = () => {
    return {
        matches: [
        ],
    }
  }
// const state = getDefaultState()
const state = () => ({
  matches: [
  ],
});

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_ACCOUNT: (state, account) => {
    state._addr = account.address
    state.name = account.name
    state._id = account._id
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  ADD_BETS: (state, data) => {
    let i = state.matches.findIndex(({title}) => title == data.title)
    if (i > -1) {
        let index = state.matches[i].bet.findIndex(({type, name}) => type == data.bet.type && name == data.bet.name)
        if (index > -1) {
          if (state.matches[i].bet.length > 1)
              state.matches[i].bet.splice(index, 1)
          else
              state.matches.splice(i, 1)
        } else
            state.matches[i].bet.push(data.bet)
    } else {
        let newMatch = {}
        newMatch.title = data.title
        newMatch.bet = []
        newMatch.bet.push(data.bet)
        state.matches.push(newMatch)
    }
  }
}

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
}