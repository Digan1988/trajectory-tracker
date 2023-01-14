<template>
    <div style="display: flex;justify-content: center;">
        <div style="display: flex;justify-content: center;align-items: center;">
            <img src="@/assets/joystick-base.png"/>
            <div id="stick1" style="position: absolute;">
                <img src="@/assets/joystick-red.png"/>		
            </div>
        </div>
    </div>
</template>

<script>
import useJoystickController from '@/use/useJoystickController'
export default {
    setup() {
        const joystickController = useJoystickController()
        console.log(joystickController);
    },
}
</script>

<style scoped>

</style>