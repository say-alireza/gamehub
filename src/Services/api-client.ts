import axios from "axios"
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d06bda389cd149418b957da567318f5b"
    }
})
