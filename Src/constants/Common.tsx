import Axios from "axios";

const $http = Axios.create({
    //@ts-ignore
    baseURL: "",
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',

    }
})


export  default {
    axiosInstance: $http,

}
