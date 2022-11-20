import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        layersParams: { 
            h1: -1500,
            h2: -1560,
            h3: -1450,
            h4: -1530,
            sidecutAngle: 30 
        }
      }
    },
    mutations: {
      setLayersParams(state, params) {
        console.log(params);
        state.layersParams = params
      }
    }
  })

  export default store