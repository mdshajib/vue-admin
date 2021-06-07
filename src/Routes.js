import Vue          from 'vue'
import Router       from 'vue-router'

import Login        from './pages/Login'
import Dashboard    from './pages/Dashboard'
import Home         from './pages/Home'
import Layout       from './components/inc/Layout'
import Error        from './pages/Error'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        { path: '/login' , component:Login },
        { 
            path: '/' ,
            name: 'Layout',
            component:Layout,
            children: [
                { path: '/dashboard' , name: 'Dashboard', component:Dashboard },
                { path: '/home' , name: 'Home', component:Home },
            ] 
        },
        {
            path: '*', name: 'Error', component: Error
        }
        
        
    ]
})