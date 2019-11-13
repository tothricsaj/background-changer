export default (state, action) => {
    switch(action.type) {
        case 'frameColor':
            return {...,state, action.color};
        case 'bgColor':
            return {...,state, action.color};
        default:
            return state;

    }
}
