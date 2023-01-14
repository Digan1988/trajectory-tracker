<template>
    <div style="display: flex;flex-direction: column;align-items: center;">
        <div id="status1" style="color: red;">{{ status }}</div>
        <div style="display: flex;justify-content: center;align-items: center;">
            <img src="@/assets/joystick-base.png"/>
            <div id="stick1" style="position: absolute;" ref="stick" @mousedown="handleDown" @touchstart="handleDown">
                <img src="@/assets/joystick-red.png"/>		
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import {useStore} from "vuex"

export default {
    setup() {
        const stick = ref(null)

        const store = useStore()

        const status = computed(() => {
            return JSON.stringify(store.state.stick.value)
        })

        const maxDistance = 64
        const deadzone = 8

        const handleDown = (event) => {
            event.preventDefault();
            store.commit("setStickStatus", true)
            stick.value.style.transition = '0s';

            if (event.changedTouches) {
                store.commit("setDragStart", { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY })
            } else {
                store.commit("setDragStart", { x: event.clientX, y: event.clientY })
            }

            if (event.changedTouches) {
                store.commit("setTouchId", event.changedTouches[0].identifier)
            }
        }

        const handleMove = (event) => {
            if (!store.state.stick.active) return;
            let touchmoveId = null;
            if (event.changedTouches)
            {
                for (let i = 0; i < event.changedTouches.length; i++)
                {
                    if (store.state.stick.touchId == event.changedTouches[i].identifier)
                    {
                        touchmoveId = i;
                        event.clientX = event.changedTouches[i].clientX;
                        event.clientY = event.changedTouches[i].clientY;
                    }
                }

                if (touchmoveId == null) return;
            }

            const xDiff = event.clientX - store.state.stick.dragStart.x;
            const yDiff = event.clientY - store.state.stick.dragStart.y;
            const angle = Math.atan2(yDiff, xDiff);
            const distance = Math.min(maxDistance, Math.hypot(xDiff, yDiff));
            const xPosition = distance * Math.cos(angle);
            const yPosition = distance * Math.sin(angle);

            // move stick image to new position
            stick.value.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0px)`;

            // deadzone adjustment
            const distance2 = (distance < deadzone) ? 0 : maxDistance / (maxDistance - deadzone) * (distance - deadzone);
            const xPosition2 = distance2 * Math.cos(angle);
            const yPosition2 = distance2 * Math.sin(angle);
            const xPercent = parseFloat((xPosition2 / maxDistance).toFixed(4));
            const yPercent = parseFloat((yPosition2 / maxDistance).toFixed(4));
            
            store.commit("setStickValue", { x: xPercent, y: yPercent });
        }

        const handleUp = (event) => {
            if (!store.state.stick.active) return;

            if (event.changedTouches && store.state.stick.touchId != event.changedTouches[0].identifier) return;

            stick.value.style.transition = '.2s'
            stick.value.style.transform = `translate3d(0px, 0px, 0px)`
            store.commit("setStickValue", { x: 0, y: 0 })
            store.commit("setTouchId", null)
            store.commit("setStickStatus", false)
        }

        document.addEventListener('mousemove', handleMove, {passive: false});
		document.addEventListener('touchmove', handleMove, {passive: false});
		document.addEventListener('mouseup', handleUp);
		document.addEventListener('touchend', handleUp);

        return {
            stick,
            status,
            handleDown
        }
    },
}
</script>

<style scoped>

</style>