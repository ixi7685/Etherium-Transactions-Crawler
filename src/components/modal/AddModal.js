import Modal from './Modal.js'
export default {
    name: 'addModal',
    template: /*html*/`
        <div>
            <transition enter-active-class='animate__animated animate__fadeIn animate__faster' leave-active-class='animate__animated animate__fadeOut animate__faster' mode="out-in">
                <Modal  v-if="showAddModal" @close="closeModal" >
                        <form @submit.prevent="onSubmit" style='width:100%;height:100%;padding:10px;'  >

                          <h4 class='text-center mb-2'> Add Address and Block</h4><br><br>


                               <p style="font-size:11px;color:red" > COPY & PASTE SUGGESTED ADDRESS 1 & SUGGESTED BLOCK 1</p><br><br><br>
                               <p style="font-size:11px;color:red" > OR SUGGESTED ADDRESS 2 & SUGGESTED BLOCK 2</p><br><br><br>
                               <p style="font-size:11px;color:red" > OR RANDOMLY SELECT THE TRANSACTION ADDRESS & BLOCK</p><br><br><br>

                                <p style="font-size:13px;color:green">SUGGESTED ADDRESS 1: </p>
                                <p style="font-size:13px;color:green">0xfa85acc8a56efb918efd58ac0277fde6bd2611d2</p> <br>
                                
                                <p style="font-size:13px;color:blue">SUGGESTED ADDRESS 2 : </p>
                                <p style="font-size:13px;color:blue">0x8944A8930b1A37301A56615aEe611CeEd7B62acE</p> 

                               
                               
                                
                                <div class="form-group mb-3">
                                    <label for="Block"></label>
                                    <input  v-model="address" type="text" class="form-control" minlength="14" placeholder="Address" style="width:340px;" required>
                                </div><br><br>
                                <p style="font-size:13px;color:green">SUGGESTED BLOCK 1: 11544030</p>
                                <p style="font-size:13px;color:blue"> SUGGESTED BLOCK 2: 11385250</p><br><br>

                                 <div class="form-group">
                                    <label for="Block"> </label>
                                    <input v-model="block" type="text" class="form-control"   minlength="4" placeholder="Block"  style="width:340px;" required>
                                </div>
                                
                                <button class='btn btn-info d-block m-auto' >ADD</button>
                           

                        </form>
                </Modal>
            </transition>
        </div>
    
    `,

    data() {

       

        return {
          
            address:'',
            block:'',
        }
    },
   
    components: {
        Modal,
        
    },

    computed: {
       
        showAddModal() {
            return this.$store.getters.showAddModal
        },

        
    },

   
    
    methods: {

        closeModal() {
            this.address='',
            this.block='',
            this.$store.dispatch('setAddModal', false)
            
            
        },


        onSubmit() {
           
            console.log(this.block)
         
            this.$store.dispatch('setAddress', this.address)
            this.$store.dispatch('setBlock', this.block)
            this.closeModal()
           
            

            
        }, 

   
    }, 

}