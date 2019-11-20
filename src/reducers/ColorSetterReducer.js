export default (state, action) => {
    switch(action.type) {
        case 'frameColor':
            return {...state, ...{frameBgColor: action.color}};
        case 'bgColor':
            return {...state, ...{contentBgColor: action.color}};
        default:
            return state;

    }
}
