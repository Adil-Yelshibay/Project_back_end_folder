import {createStore} from 'vuex'
import axios from "axios";
const app = axios({
    baseURL : 'http://localhost:3000'
});

export default createStore({
    state:{
        users:[]
    },
    mutations:{
        get_user_mutation(state, payLoad){
            state.users = payLoad;
        },
        delete_user_mutatios(state, id){
        }
    },
    actions:{
        async get_users_actions({commit}){
            const {data, status} = await app.get('users')
            if(status ==200){
                commit('get_users_mutation', data)
            }
        }
    },
    modules:{

    }
})