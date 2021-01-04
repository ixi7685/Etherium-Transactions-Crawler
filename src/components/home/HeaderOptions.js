export default {
    name:'homeHeaderOptions',
    template: /*html*/`

        <div  class="home-header" style='display:flex;justify-content:center;align-items:center;width:100%;height:200px;'>
                 
        <div class="home-header-item" > <i class="fab fa-ethereum"></i> &nbsp&nbsp  <i class="fas fa-dollar-sign">{{eth}}</i>  &nbsp&nbsp&nbsp<div style=" border-left: 2px solid black;
        height: 40px;margin-left:5px;margin-right:5px">&nbsp&nbsp&nbsp</div>  <i class="fab fa-ethereum"></i>&nbsp <i class="fas fa-exchange-alt"></i> &nbsp<i class="fab fa-bitcoin"></i> &nbsp {{btc}}      </div>
            
        <div class="home-header-item">
        <i class="fas fa-globe"></i>&nbspMARKET CAP &nbsp{{ marketCap }} &nbsp<i class="fas fa-dollar-sign"></i> </div>
        
        </div>
    
    `,

    data() {
        return {
            apiKey : 'X136HDYEAZTCN63163TCJCYE27DMAMUFAS',
            eth:'',
            btc:'',
            marketCap:''
        }
    },
    

    methods: {
        
             fetch(){
               var  vm = this
               axios.get(
               `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${this.apiKey}`
              ).then(function(response) {
                vm.eth=response.data.result.ethusd    
                vm.btc =response.data.result.ethbtc
              }) .catch(function(error) {
                console.log(error);
              });

               axios.get(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${this.apiKey}`
              ).then(function(response){
               var res =response.data.result
               var price = res.toString();
               price = price.slice(0, price.length - 18);
               vm.marketCap= parseInt(price) * vm.eth
               }).catch(function(error) {
                console.log(error);
            });
          
            },

    },
    mounted () {
      this.fetch()
    }
}