
const reducer = (initial={gridData :[],searchedData:[]}, action)=>{
    if(action.type === "gridData"){
        return{
            ...initial,
            gridData:action.data
        }
    }
    else if(action.type === "searchedData"){
        return{
            ...initial,
            searchedData:action.data
        }
    }

    return initial
}

export default reducer
