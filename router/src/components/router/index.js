import { createWebHistory, createRouter } from "vue-router"; // import Contact from "@/views/Contact";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from '@/views/Produk.vue';
import Kategori from '@/views/Kategori.vue';
import Detail from '@/views/Detail.vue';
import DetailDua from '@/views/DetailDua.vue';

import Login from "@/views/Login.vue";
import { users } from "../../assets/User";

const routes = [
    {
        path:"/",
        name:"Home",
        component: Home,
    },
    {
        path:"/about",
        name:"About",
        component: About,
    },
    {
        path:"/contact",
        name:"Contact",
        component: Contact,
    },
    {
        path:"/kategori",
        name:"Kategori",
        component: Kategori,
    },
    {
        path:"/detaildua/:id_kategori",
        name:"DetailDua",
        component: DetailDua,
        props:true,
    },
    {
        path:"/login",
        name:"/Login",
        component:Login,
        props:true,
    },
    {
        path:"/produk",
        name:"Produk",
        component: Produk,
        beforeEnter: (to, from, next) => {
            const loggedInUser = users.find((user)=> user.isLoggedin == true);
            if(loggedInUser){
                next();
            } else{
                next("/login");
            }
        }
    },
    {
        path:"/detail/:id_produk",
        name:"Detail",
        component: Detail,
        props:true,
    },

    // {path: "/:pathMatch(.*)*",component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;