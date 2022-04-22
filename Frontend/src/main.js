import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
//Ebben van leírva, hogy működik a route
import RouteConfig from './config/routes.js'

//Így indíjuk a router-t
const router = new VueRouter({
    routes: RouteConfig
});

//A VueResource, VueRouter használatba vétele
Vue.use(VueResource);
Vue.use(VueRouter);

class users {
    constructor(email = null, name = null) {
        this.email = email;
        this.name = name;
        
    }
}


Vue.config.productionTip = false

Vue.prototype.$loginServer = "http://localhost:3000"

let x =new Vue({
    router,
    data(){
        return {
            token: null,
            user: new users()
        }
    },
    created(){
        if (this.$route.path !== "/"){
            this.$router.push({
                path: "/"
            });
        }
    },
    render: h => h(App)
}).$mount('#app')



//Minden route beírásakor lefut, mielőtt ráugrana az adott oldalra
//Ha kiadjuk a next()-et, akkor továbbengedi
router.beforeEach((to, from, next) => {
    //A to tartalmazza, hogy mit írtunk be
    //to.mached gyűjtemény azon rekordok, amik a routes tömb-ben megfellenek az útvonalnak.

    let loggedIn = x.$data.token
    //A megtalált útvonalhoz tratozó route objektumban meta.requiresAuth true-e
    //Azaz bejelnekezéshez kötött menüpont-e
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!loggedIn) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});