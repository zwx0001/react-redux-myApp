const defaultsState={

}
export default (state=defaultsState,action)=>{
    let newState={...state};
    const {type}=action;
    switch(type){
        case "":
        return newState;
        default:
        return newState;
    }
}