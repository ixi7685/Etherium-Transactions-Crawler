
import HeaderOptions from '../components/home/HeaderOptions.js'
import HomeCard from '../components/home/HomeCard.js'
export default {
    name: 'home',
    template: /*html*/`
        <div class='home-container' >

            <HeaderOptions /> 
            <HomeCard  :isTransactionsLoaded="isTransactionsLoaded" :transactions="transactions"   />
            <div @click="openModal" class='open-modal'>
                <i class="fas fa-plus"></i>
            </div>

        </div>
    `,
    data: function() {
        return {
           apiKey : 'X136HDYEAZTCN63163TCJCYE27DMAMUFAS',
           temp:'',
           empty:''
           
        }
    },

    computed: {

        block() {
            return this.$store.getters.block
        },
        address() {
            return this.$store.getters.address
        },
        
        isTransactionsLoaded(){
            return  this.$store.getters.isTransactionsLoaded
        },
        transactions(){
            return  this.$store.getters.transactions
        },
        
        

        

       

        
    },

    components: {
        HeaderOptions,
        HomeCard
    },

    methods: {
    getTransactions() {

            let vm = this;
            this.$store.dispatch('setLoading', true)
            axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${this.address}&startblock=${this.block}&endblock=latest&sort=asc&apikey=`+ this.apiKey)
            .then(function(response) {
            vm.$store.dispatch('setLoaded', true)
            var checked =response.data.result.map(item=> +item.value * 1e-18) 
            vm.temp= response.data.result.map(({value, ...rest}) => ({...rest, value: +value * 1e-18}));
            vm.$store.dispatch('setTransactions', vm.temp)
           
            vm.$store.dispatch('setLoading', false)
            })
            .catch(function(error) {
            console.log(error);
            })
      
    },
    openModal() {
            this.$store.dispatch('setAddModal', true)
            },
    },
   
    watch: {
      /*address: function(newVal, oldVal) {


        
       if(newVal == oldVal) {
       this.getTransactions()
       }else{
           this.getTransactions()
       }
      },*/
      
         
       /*  address: function() {
         
            this.getTransactions()
        },
        block: function() {
         
            this.getTransactions()
        },*/

      /*  combined: {
            handler: function (val, oldVal) { 
                
                console.log(val)
                console.log(oldVal)
                this.getTransactions()

             },
           
        },
        block: function() {
         
            this.getTransactions()
        },*/
      /*  address: {
            handler: function (val, oldVal) { 
                
                console.log(val)
                console.log(oldVal)
                this.getTransactions()

             },
            nextTick: true
        }*/
        
        

        block: {
            handler: function (val, oldVal) { 
                
                console.log(val)
                console.log(oldVal)
                this.getTransactions()

             },
            
        },
            address: function() {


        
           
                this.getTransactions()
            }
      


        },
           
   

   
    
   
}

