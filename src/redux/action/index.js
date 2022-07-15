
export const addCart = (product, count) => {
    let data ={
        product:product,
        count:count
    }
    return{
        type : "ADDITEM",
        payload : data

    }
}



export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}