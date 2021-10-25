export const state = () => ({
  counts: 0
})

export const mutations = {
  incrementcount(state) {
    state.counts++
  }
}