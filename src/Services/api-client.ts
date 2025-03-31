import axios from "axios"
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"62573053ee58446f84ab9e4357054ac7"
    }
})
