function posts(state = [], action){
    console.log('The post is changed');
    console.log(state, action);
    return state;
}

export default posts;