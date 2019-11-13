export default (state, action) => {
    switch(action.type) {
        case 'frameColor':
            return {...state, ...{frameColor: action.color}};
        case 'bgColor':
            return {...state, ...{bgColor: action.color}};
        default:
            return state;

    }
}
