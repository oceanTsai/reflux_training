import Reflux from 'reflux'
import dialogActions from '../Action/DialogAction.js'

export const dialogStore = Reflux.createStore({
    //listen action
    listenables: {
        ...dialogActions
    },
    //default state
    state:{
        confirmIsShow: false
    },
    //for container get state
    getInitialState : function(){
        return this.state
    },
    //
    isConfirmChange: function(isShow){
        this.state.confirmIsShow = isShow
        this.trigger(this.state);        
    }
})

export default {dialogStore}
