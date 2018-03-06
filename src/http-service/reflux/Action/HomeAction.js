import Reflux from 'reflux'

let {homeActions} = module['exports'] && module['exports']['default'] ? module.exports.default : {}

if(module.hasOwnProperty('commonActions')){
    homeActions = module.homeActions    
}else{
    homeActions = Reflux.createActions([
        "checkedMemberChange"
    ])
}

export default homeActions