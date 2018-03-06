import Reflux from 'reflux'
import commonActions from '../Action/CommonAction.js'
import productActions from '../Action/ProductAction.js'

export const productStore = Reflux.createStore({
    listenables: {
        ...commonActions,
        ...productActions
    },
    state:{
        productList: [],
        checkedProduct: null,
        confirmIsShow: false
    },

    getInitialState : function(){
        return this.state
    },
    
    onFindProductSuccess: function (data) {
        this.state = {
            ...this.state,
            productList: data
        }
        this.trigger(this.state);
    },

    onFindProductFailed: function (err) {
    },

    onCheckedProductChange: function(val){
        this.state = {
            ...this.state,
            checkedProduct: val
        }
        this.trigger(this.state);
    },
    isConfirmChange: function(isShow){

    }
})

export default {productStore}
