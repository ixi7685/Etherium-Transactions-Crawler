export default {
    name: 'navbar',
    template: /*html*/`
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="display:flex;">
            
                <router-link   :to="'/'" exact tag="span" class="rout"><i class="fab fa-ethereum" ></i> Etherium Transactions Crawler</router-link>
                <router-link   :to="'/tokens'" exact tag="span" class="rout">Tokens</router-link>
               
        <i v-if='loading' style='margin-left:auto;' class="fas fa-circle-notch fa-lg fa-spin"></i>
        </nav>
    `,
    data: function() {
        return {
            
        }
    },
    computed: {
        
        loading() {
            return this.$store.getters.loading
        }
    },
}

