export default (state, action) => {
    switch(action.type) {
        case 'frameColor':
            console.log(action.color);
            return {...state, ...{frameBgColor: action.color}};
        case 'bgColor':
            console.log(action.color);
            return {...state, ...{contentBgColor: action.color}};
        default:
            return state;

    }
}
