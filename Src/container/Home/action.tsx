import {ActionType} from "../../constants";
import ApiServices from "../../ApiService/ApiServices";

//Click on Add Button
export const getFoodList = (data: string, successCallback: Function, errorCallBack: Function) => {
    return function (dispatch: Function, getState: Function) {
        ApiServices.getApiCall(data, (res: any) => {
            var result = res.map(function (el) {
                var o = Object.assign({}, el);
                o.isExpand = false;
                return o;
            })
            console.log(JSON.stringify(result))
            dispatch({
                type: ActionType.INTIALSTATE,
                dataSource: Array.from(result)
            })
            dispatch({
                type: ActionType.COPY_DATA,
                copyDataSource: Array.from(result)
            })
            dispatch({
                type: ActionType.MAKE_REQUEST,
                isMakeRequest: false
            })
            successCallback(result)
        }, () => {
            errorCallBack()
        })

    }


}


//Update Item
export const handleExpand = (index: number) => {
//alert(title)
    return function (dispatch: Function, getState: Function) {
        let tempData = getState().FoodReducers.dataSource

        tempData.forEach(function (element, rowindex) {
            if (rowindex === index) {
                element.isExpand = !element.isExpand
            } else {
                element.isExpand = false
            }
        });


        dispatch({
            type: ActionType.INTIALSTATE,
            dataSource: Array.from(tempData)
        })

    }
}

export const searchData = (text: string) => {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().FoodReducers.dataSource
        let backupData = getState().FoodReducers.copyDataSource
        let searchText = text.trim().toLowerCase();
        if (!text) {
            dispatch({
                type: ActionType.INTIALSTATE,
                dataSource: Array.from(backupData)
            })
        } else {
            let data = tempData.filter(item => {
                return item.category.categoryName.toLowerCase().match(searchText);
            });

            dispatch({
                type: ActionType.INTIALSTATE,
                dataSource: Array.from(data)
            })
        }

    }
}
