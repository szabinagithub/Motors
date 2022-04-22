//1. routes komponenseinek importálása
import Fooldal from "../components/routes/Fooldal.vue";
import Users from "../components/routes/Users.vue";
import Login from "../components/routes/Login.vue";
import NotFound from "../components/routes/NotFound.vue";
import Profile from "../components/routes/Profile.vue";


//2. route - komponens hozzárendelés
const routes = [
    {
        name: "users",
        path: "/users",
        component: Users,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "profile",
        path: "/profile",
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "fooldal",
        path: "/",
        component: Fooldal,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "404",
        path: '/404',
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
];

//3. Export, hogy kívülről elérhető legyen
export default routes;