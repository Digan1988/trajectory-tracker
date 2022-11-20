<template>
    <div>
        <svg ref="svg" width="800" height="400" viewBox="0 0 10 2000" wi xmlns="http://www.w3.org/2000/svg">
            <line x1="3" :y1="line.y1" x2="4" :y2="line.y2" stroke="black" stroke-width="10" />
        </svg>
    </div>
</template>
  
  <script>
  import { onMounted, onUpdated, ref, computed } from 'vue'
  
  export default {
    props: ['params'],
    setup(props) {
      const svg = ref(null)

      const line = computed(() => {
        return {
          x1: 3,
          y1: props.params.h3* -1,
          x2: 4,
          y2: props.params.h4 * -1
        }
      })

      onMounted(() => {
        
      });

      onUpdated(() => {

      })
  
      return {
        svg,
        line
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>