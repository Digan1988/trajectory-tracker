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
        },
        stick: {
          active: false,
          dragStart: null,
          touchId: null,
          value: { x: 0, y: 0 }
        }
      }
    },
    mutations: {
      setLayersParams(state, params) {
        state.layersParams = params
      },
      setStickStatus(state, params) {
        state.stick.active = params
      },
      setDragStart(state, params) {
        state.stick.dragStart = params
      },
      setTouchId(state, params) {
        state.stick.touchId = params
      },
      setStickValue(state, params) {
        state.stick.value = params
      }
    }
  })

  export default store