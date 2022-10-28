export const state = () => ({
  url: 'https://www.cbr-xml-daily.ru/daily_json.js',
  coinDB: {},
  valutes: [],
  valute1: null,
  valute2: null,
  amount: 0
})

export const getters = {
  flagForStartCounting: state => {
    if (state.valute1 != null && state.valute2 != null && state.amount != 0) {
      return true
    } else {
      return false
    }
  },
  total: (state, getters) => {
    if (getters.flagForStartCounting) {
      const costOfCoinsInRubles = (state.valute1.Value / state.valute1.Nominal) * state.amount
      return costOfCoinsInRubles / (state.valute2.Value / state.valute2.Nominal) + ` ${state.valute2.Name}`
    } else {
      return 0
    }
  }
}

export const mutations = {
  FETCH_COIN_DB(state, db) {
    state.coinDB = db
  },
  SET_VALUTES(state, valutes) {
    state.valutes = valutes
  },
  SET_VALUTE1(state, valute1) {
    state.valute1 = valute1
  },
  SET_VALUTE2(state, valute2) {
    state.valute2 = valute2
  },
  SET_AMOUNT(state, amount) {
    state.amount = amount
  }
}

export const actions = {
  async fetchCoins({ state, commit }) {
    await this.$axios.get(state.url).then(res => {
      commit('FETCH_COIN_DB', res.data)
      commit('SET_VALUTES', Object.values(res.data.Valute))
    })
  }
}