<template>
    <div class="chart-cont">
      <svg ref="svg" width="733" height="400" viewBox="0 0 4929 2690" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" style="background-color:#333333">
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#FF9933" />
            <stop offset="10%" stop-color="#993399" />
            <stop offset="20%" stop-color="#990033" />
            <stop offset="30%" stop-color="white" />
            <stop offset="50%" stop-color="#FFCC99" />
            <stop offset="80%" stop-color="#FF9966" />
            <stop offset="100%" stop-color="#FFCCFF" />
          </linearGradient>
          <linearGradient id="Gradient2">
            <stop offset="0%" stop-color="#999999" />
            <stop offset="50%" stop-color="white" />
            <stop offset="100%" stop-color="#999999" />
          </linearGradient>
          <filter id='noiseFilter'>
            <feTurbulence 
              type='fractalNoise' 
              baseFrequency='0.65' 
              numOctaves='3' 
              stitchTiles='stitch'/>
          </filter>
        </defs>
        <g transform="translate(0, 690)">
          <rect x="0" y="0" width="4929" height="2000" fill="url(#Gradient1)"/>
          <rect x="0" :y="workRect.y" width="4929" :height="workRect.height" fill="#EDC9AF" filter='url(#noiseFilter)'/>
          <rect x="708" y="0" width="83" height="1793" fill="url(#Gradient2)" stroke="#333333"/>
          <path :d="arcPath" stroke="#333333" fill="transparent" stroke-width="20"/>
          <text :x="h1Text.x" :y="h1Text.y" class="label-text">{{h1Text.text}}</text>
          <text :x="h2Text.x" :y="h2Text.y" class="label-text">{{h2Text.text}}</text>
          <text :x="h3Text.x" :y="h3Text.y" class="label-text">{{h3Text.text}}</text>
          <text :x="h4Text.x" :y="h4Text.y" class="label-text">{{h4Text.text}}</text>
        </g>
      </svg>
    </div>
</template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    props: ['params'],
    setup(props) {
      const svg = ref(null)

      const arcPath = computed(() => {
        const depth = props.params.h3 - props.params.h4
        const b = depth * Math.tan(props.params.sidecutAngle * Math.PI/180)

        const x1 = 750
        const y1 = props.params.h3 * -1
        const x2 = x1 + b
        const y2 = props.params.h4 * -1

        const mpx = (x2 + x1) * 0.5;
        const mpy = (y2 + y1) * 0.5;

        const theta = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;

        const offset = -20;

        const c1x = mpx + offset * Math.cos(theta);
        const c1y = mpy + offset * Math.sin(theta);

        return `M ${x1} ${y1} Q ${c1x} ${c1y} ${x2} ${y2}`;
      })

      const workRect = computed(() => {
        return {
          y: props.params.h1 * -1,
          height: props.params.h1 - props.params.h2
        }
      })

      const h1Text = computed(() => {
        return {
          x: 3000, 
          y: props.params.h1 * -1 - 40,
          text: `${props.params.h1}`
        }
      })

      const h2Text = computed(() => {
        return {
          x: 3000, 
          y: props.params.h1 * -1 + props.params.h1 - props.params.h2 + 120,
          text: `${props.params.h2}`
        }
      })

      const h3Text = computed(() => {
        return {
          x: 808, 
          y: props.params.h3 * -1 - 40,
          text: `${props.params.h3}`
        }
      })

      const h4Text = computed(() => {
        const depth = props.params.h3 - props.params.h4
        const b = depth * Math.tan(props.params.sidecutAngle * Math.PI/180)
        return {
          x: 808 + b, 
          y: props.params.h4 * -1 + 60,
          text: `${props.params.h4}`
        }
      })
  
      return {
        svg,
        arcPath,
        workRect,
        h1Text,
        h2Text,
        h3Text,
        h4Text
      }
    }
  }
  </script>
  
  <style scoped>
  .label-text{
    font-size: 8em;
    font-weight: bold;
    fill: #333333;
  }
  .chart-cont{
    display: flex;
    justify-content: center;
  }
  </style>