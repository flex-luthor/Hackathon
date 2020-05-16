import { sampleActions } from './action_types';

const initState = {
    state_holder: false
};
export default function (state=initState, action) {
    switch(action.type) {
        case sampleActions.FIRST_ACTION:
            return {
                ...state,
                state_holder: !state.state_holder,
            };
        default:
            return state;
    }
}