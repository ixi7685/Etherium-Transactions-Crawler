export const store = new Vuex.Store({
    state: {
     

      loading: false,

      address: '',

      block: '',

     
      transactions:'',

     

      //modals
     
      showAddModal: false,

      isTransactionsLoaded: false,
      


    },
    mutations: {
       

      setLoading(state, payload) {
        
        state.loading = payload
      },

      setAddress(state, payload) {
        
        state.address = payload
      },

      setBlock(state, payload) {
        
        state.block = payload
      },


      setAddModal(state, payload) {
        state.showAddModal = payload
      },

     
      setLoaded(state, payload) {
        state.isTransactionsLoaded = payload
      },
      setTransactions(state, payload) {
        state.transactions = payload
      },
      
      

    },
    actions: {
        
         setLoading({commit}, payload) {

            commit('setLoading', payload)
        },

          setAddress({commit}, payload) {
        
             commit('setAddress', payload)
          },
    
          setBlock({commit}, payload) {
            
             commit('setBlock', payload)
          },

        

          setAddModal({commit}, payload) {
              commit('setAddModal', payload)
            
          },

        
         setLoaded({commit}, payload) {
          commit('setLoaded', payload)
     
        },
        setTransactions({commit}, payload) {
          commit('setTransactions', payload)
     
        },
       
    
    },
    getters: {
       

        loading(state) {
            return state.loading
        },

        showAddModal(state) {
            return state.showAddModal
        },
        address(state) {
            return state.address
        },
        block(state) {
            return state.block
        },

       
        isTransactionsLoaded(state) {

          return state.isTransactionsLoaded
        },
        transactions(state){

          return state.transactions
        }
        
        

    }
  })