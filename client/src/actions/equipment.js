import axios from "axios"
export const getEquipments=()=>{
    return async dispatch=>{
        const res=await axios.get("/getEquipments")
        console.log(res.data)
      dispatch({type:"GET_EQUIPMENTS",payload:res.data})
    }
}