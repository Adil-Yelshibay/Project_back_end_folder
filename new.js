const url = 'https://reqres.in/api/users/page=2';
const my_url = 'http://localhost:3000/users';
const vm = {
    data(){
        return {
            users: []
        }
    },
    mounted(){
        axies.get(my_url).then(res => {
            this.users = res.data;
            console.log(this.users);
        })
    },
    methods:{
        async deleteUser(index){
            const id = this.users[index].id;
            this.users.splice(index,1);
            await axios.delete(my_url + '/' + id);
        }
    }
};

Vue.create(vm).mount('#app')