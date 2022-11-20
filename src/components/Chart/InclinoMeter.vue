<template>
  <div class="incl-cont">
    <svg ref="svg" width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#0066FF"/>
        </marker>
      </defs>
      <image href="@/assets/compass-rose.png" height="100" width="100" />
      <text x="368" y="205" class="label-text">0°</text>
      <text x="190" y="32" class="label-text">90°</text>
      <text x="0" y="205" class="label-text">180°</text>
      <text x="186" y="380" class="label-text">270°</text>
      <line x1="200" y1="200" x2="345" y2="200" stroke="#0066FF" stroke-width="2" marker-end="url(#arrowhead)" :transform="`rotate(${arrowAngle}, 200, 200)`"/>
    </svg>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  props: ['angle'],
  setup(props) {
    const svg = ref(null)

    const arrowAngle = computed(() => {
      return -props.angle
    })

    return {
      svg,
      arrowAngle
    }
  }
}
</script>

<style scoped>
.incl-cont{
  display: flex;
  justify-content: center;
}
.label-text{
  font-size: 1em;
  font-weight: bold;
  fill: #333333;
}
</style>