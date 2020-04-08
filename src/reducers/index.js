import { combineReducers } from 'redux'

const crumbs = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_CRUMB':
            const crumb = action.payload;
            // Let's assume names are unique
            const spliceTo = state.findIndex(i => i.name === crumb[0].name);
            if (spliceTo == -1) {
                return [
                    ...state,
                    ...crumb
                ]
            } else {
                return state.slice(0, spliceTo + 1);
            }
        default:
            return state
    }
}

const content = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_CONTENT':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    crumbs,
    content
})