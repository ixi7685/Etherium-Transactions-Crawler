import {router} from './router.js'
import {store} from './store.js'
import Navbar from './components/layout/Navbar.js'
import AddModal from './components/modal/AddModal.js'

new Vue({
    el: '#app',
    router,
    store,
    data: {        
    },
    computed:{
        
    },
    components: {
        Navbar,
        AddModal,
        
    },
    template: /*html*/`
        <div style='width:100%;height:100%;display:flex;flex-direction:column;'>
            <Navbar />
            <div style='width:100%;flex:1;overflow:auto;display:flex;flex-direction:column;align-items:center;justify-content:flex-start'>
                <router-view></router-view>
            </div>   

            <AddModal  />

        </div>
    `,

    mounted() {

    }
  })