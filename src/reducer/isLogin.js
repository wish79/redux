const loginReducer = (state = true, action) => {
    switch (action.type){
        case 'LOGIN':
            return !state;
        case 'IS_LOGIN':
            return state;
        default:
            return state;    
    }

}

    export default loginReducer;