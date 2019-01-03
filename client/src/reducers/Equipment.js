const equipmentInitialState=[]

const equipmentReducer=(state=equipmentInitialState,action)=>{
    switch(action.type){
        case "GET_EQUIPMENTS":
        return [...state,...action.payload]
        default:
        return state;
    }
}
export default equipmentReducer;