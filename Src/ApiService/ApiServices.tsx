import Common from "../constants/Common";


// For get Request
const getApiCall = (
    paramsData: string,
    successCallback: Function,
    errorCallBAck: Function,
) => {

    Common.axiosInstance
        .get(paramsData)
        .then((response: any) => {
            if (response.status == 200) {
                console.log(response.data.categories)
                successCallback(response.data.categories)

            }
        })
        .catch((error: any) => {
            debugger;

            errorCallBAck(error.response);
        });
};


export default {
    getApiCall,

};
