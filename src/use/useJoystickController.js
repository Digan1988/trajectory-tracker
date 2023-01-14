import { ref, computed, onMounted } from 'vue'

const useJoystickController = () => {
    const stickRef = ref(null)
    const status = computed(() => {
        return `Joystick`

    })

    /*const dragStart = null
    const touchId = null
    const active = false
    const value = { x: 0, y: 0 }*/

    return {
        stickRef,
        status
    }
}

export default useJoystickController