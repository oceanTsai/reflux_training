import Reflux from 'reflux'

let {productActions} = module['exports'] && module['exports']['default'] ? module.exports.default : {}

if(module.hasOwnProperty('productActions')){
    productActions = module.productActions    
}else{
    productActions = Reflux.createActions([
        "checkedProductChange",
        "isConfirmChange"
    ])
}

export default productActions