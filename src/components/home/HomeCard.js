export default {
    name: 'developer',
    template: /*html*/`
      
 <div>
    <template v-if="isTransactionsLoaded" >
    <div>
        <table  class="rwd-table" >
            <tr>
                <th><i class="fab fa-ethereum"></i> ETH</th>
                <th><i class="fas fa-arrow-up"></i> Address From</th>
                <th><i class="fas fa-arrow-down"></i> Address To</th>
            </tr>
            <tbody >  
            <tr v-for="transaction in transactions">
            <td >{{transaction.value}} 
            </td>
            <td >{{transaction.from}}
            </td>
            <td >{{transaction.to}}
            </td>
            </tr>
            </tbody>
        </table>

     </div>
    </template> 
    <template v-else-if="transactions">
    <div class="welcome" > <h4>Loading...</h4>  </div>
    
   </template>
    <template v-else>
        <div class="welcome" > <h1>Welcome !</h1> <br> <h4>Please, enter an address and block to get details of transactions</h4>  </div>
    </template>
 </div>


 `,
    data: function() {
        return {
           
        }
    },
    props: ['isTransactionsLoaded','transactions'],
   

}

