import { COUNTER_ACTIONS } from "../constants/counterActions";

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    const { type } = action || {};
    switch(type){
        case COUNTER_ACTIONS.INCREMENT: {
            return { ...state, counter: state.counter + 1 };
        }
        case COUNTER_ACTIONS.DECREMENT: {
            return { ...state, counter: state.counter - 1 };
        }
        default:
            //do nothing
    }
}

export default counterReducer;