import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  todolists: [],
  todolist:{}
}

const mutations = {
  setTodolists(state, payload){
    state.todolists = payload
  },
  setAddOneTodolist(state, payload){
    state.todolists.push(payload);
  },
  deleteOneTodolist(state, payload){
    console.log('mutations delete ', payload)
    //mengambil data yang ada di state question selain payload iteuh di var filterQuestion
    const filterTodolist = state.todolists.filter((todolist) => todolist._id !== payload)
    // state.questions nilainya di override dgn filterQuestion
    state.todolists = filterTodolist
  },
  setTodoList(state, payload){
    state.todolist = payload
  },
  saveEditTodolist (state, payload) {
    console.log('mutations save edit ', payload)
    const idxTodolist = state.todolists.findIndex((todolist => todolist.id == payload._id));
    state.todolists[idxTodolist].tgl = payload.tgl
    state.todolists[idxTodolist].priority = payload.priority
    state.todolists[idxTodolist].task = payload.task
    state.todolists[idxTodolist].status = payload.status
  }
}

const actions = {
  getAllTodolis({commit}){
    axios.get('http://localhost:3000/todolists')
    .then(({ data }) => {
      console.log(data)
      commit('setTodolists', data)
    })
    .catch(err => console.log(err))
  },
  addOneTodolist ({commit}, objTodolist) {
    console.log(objTodolist);
    axios.post(`http://localhost:3000/todolists`, objTodolist)
    .then(data => {
        console.log(data.data)
        commit('setAddOneTodolist', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteOneTodolist ({ commit }, todolistId) {
    console.log("data masuk", todolistId);
    axios.delete(`http://localhost:3000/todolists/${todolistId}`)
    .then(({ data }) => {
      console.log(data)
      commit('deleteOneTodolist', todolistId)
    })
    .catch(err => console.log(err))
  },
  setTodolist({commit}, todolist){
    console.log(todolist);
    commit('setTodoList',todolist)
  },
  saveEditTodolist ({commit}, objTodolist) {
    console.log('object todo dari componen',objTodolist);
    axios.put(`http://localhost:3000/todolists/${objTodolist._id}`, objTodolist)
    .then(data => {
        console.log(data.data)
        commit('saveEditTodolist', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
