const app ={
    data(){
        return{
            name: 'Punnapop Chalor',
            account: '@pnnpp__',
            countPost: 40,
            followers: 723,
            following: 1791,
            image: './images/profile.jpg'
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')