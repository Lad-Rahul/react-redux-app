import { COUNTER_ACTIONS } from "../constants/counterActions"

export const incrementCount = () => {
    return {
        type: COUNTER_ACTIONS.INCREMENT
    }
}

export const decrementCount = () => {
    return {
        type: COUNTER_ACTIONS.DECREMENT
    }
}