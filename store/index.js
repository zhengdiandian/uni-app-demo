import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userState = {
	userName: '',
	hasLogin: false,
	hasSkip: false
}

const userInfo = uni.getStorageSync('userInfo')

if(userInfo.hasLogin) {
	userState = userInfo
}

if(userInfo.hasSkip) {
	userState.hasSkip = true
}

const store = new Vuex.Store({
	state:{...userState},
	mutations: {
		skipIndex(state){
			state.hasSkip = true
			uni.setStorageSync(userInfo, {...state})

		}
	}
})
export default store