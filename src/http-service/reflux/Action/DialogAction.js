import Reflux from 'reflux'

let {dialogActions} = module['exports'] && module['exports']['default'] ? module.exports.default : {}

if(module.hasOwnProperty('commonActions')){
    dialogActions = module.dialogActions    
}else{
    dialogActions = Reflux.createActions([
        "isConfirmChange"
    ])
}

export default dialogActions