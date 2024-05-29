import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientesView from '../views/ClientesView.vue';
import ClientesCreateView from '../views/ClientesCreateView.vue';
import ClientesEditarView from '../views/ClientesEditarView.vue';
import RegistroView from '../views/RegistroView.vue';
import EntradaView from '../views/EntradaView.vue';
import { getAuth } from 'firebase/auth';
import NoAutorizaView from '../views/NoAutorizaView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView,
      meta:{
        requiereAuth: true,
      }
    },
    {
      path: '/clientes/noautoriza',
      name: 'noautoriza',
      component: NoAutorizaView,
    },
    {
      path: '/clientes/create',
      name: 'clientescreate',
      component: ClientesCreateView
    },
    {
      path: '/clientes/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/clientes/entrada',
      name: 'entrada',
      component: EntradaView
    },
    {
      path: '/clientes/:id/edit',
      name: 'clienteseditar',
      component: ClientesEditarView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
//analizamos todas las rutas antes de que se ejecuten
router.beforeEach((to, from, next) => {
  //si alguna ruta tiene meta.requiereAuth
  if(to.matched.some((record) => record.meta.requiereAuth)){
    //si existe un usuario registrado
    if(getAuth().currentUser){
      next(); //continua sin problemas
    }else{
     // alert("Acceso no autorizado")
     next("/clientes/noautoriza")
    }
  }else{ //si no tiene la etiqueta meta
    next();
  }
})

export default router
