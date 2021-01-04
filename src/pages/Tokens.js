import HeaderOptions from '../components/home/HeaderOptions.js'
export default {
    name: 'Tokens',
    template: /*html*/`

    <div class="wrapper" >
      <HeaderOptions /> 

      <ul v-for="item in totalAmounts">  
          <li class="tokens-list-item"> <i class="fas fa-sort-amount-up-alt"></i> Total amount of {{item.name}} is {{item.result}}</li>
      </ul>

    </div>
    `,
    data() {
        return {
          apiKey : 'X136HDYEAZTCN63163TCJCYE27DMAMUFAS',
         totalAmounts: [],
         tether:{},
         bnb:{},
         chainLink:{}

        }
    },
    
    computed :{

     },
    components: {
      HeaderOptions,
    },
    methods: {

     
    getTokens() {

           let vm = this;
           axios.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&apikey='+ this.apiKey)
          .then(function(response) {
           vm.tether.name = 'TETHER' 
           vm.tether.result = response.data.result * 1e-6
           vm.totalAmounts.push(vm.tether)
           })
            .catch(function(error) {
                console.log(error);
            });


          axios.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xB8c77482e45F1F44dE1745F52C74426C631bDD52&apikey='+ this.apiKey)
          .then(function(response) {
           vm.bnb.name = 'BNB' 
           vm.bnb.result = response.data.result  * 1e-18
           vm.totalAmounts.push(vm.bnb)
            })
            .catch(function(error) {
                console.log(error);
            });


          axios.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x514910771af9ca656af840dff83e8264ecf986ca&apikey=' + this.apiKey )
           .then(function(response) {
           vm.chainLink.name = 'CHAIN LINK' 
           vm.chainLink.result = response.data.result * 1e-18
           vm.totalAmounts.push(vm.chainLink)
            })
            .catch(function(error) {
                console.log(error);
            });

           
    },
   },
    mounted() {
     
        this.getTokens()
    }
      
    }









