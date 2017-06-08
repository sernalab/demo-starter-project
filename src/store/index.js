import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	users: [{
      id: 1,
      name: "John Doe",
      password: "J0hnD03!x4",
      skills: ["Javascript", "VueJS"],
      email: "john.doe@gmail.com",
      status: true
    }]
  },
  getters: {
  },
  mutations: {
	addUser (state, user){
		state.users.push(user)
	}
  },
  actions: {
  }
})

export default store;
