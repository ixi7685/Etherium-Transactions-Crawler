import Home from './pages/Home.js'
import Tokens from './pages/Tokens.js'




export const router = new VueRouter({    
    routes: [
        {path: '/', name:'home', component: Home},
        
        {path: '/tokens', component: Tokens},

   
    ]
})