import { 
    // getElement,
    setPosition,
    fade,
} from '../'

export const intro = () => {
    try {

        setPosition("textClip", "centered", { top: -8, left: 0 } )
        fade("textClip", {
            onComplete: () => {
                console.log('ok, do next thing')
            }
        })
        return true
    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}