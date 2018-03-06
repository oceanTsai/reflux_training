import Reflux from 'reflux'
import commonActions from '../Action/CommonAction.js'
import homeActions from '../Action/HomeAction.js'

export const homeStore = Reflux.createStore({
    listenables: {
        ...commonActions,
        ...homeActions
    },
    state:{
        member: [],
        memberDetail: {},
        title: {},
        checkedMember: null
    },

    getInitialState : function(){
        return this.state
    },
    
    onFindMemberSuccess: function (data) {
        this.state = {
            ...this.state,
            member: data
        }
        this.trigger(this.state);
    },

    onFindMemberFaile: function (err) {
    },

    onCheckedMemberChange: function(val){
        this.state = {
            ...this.state,
            checkedMember: val
        }
        this.trigger(this.state);
    },

    findMemberDetailSucess: function(data){
        this.state = {
            ...this.state,
            memberDetail: data
        }
        this.trigger(this.state);
    }, 
    findMemberDetailFailed: function(){
    },

    findTitleSucess:function(data){
        this.state = {
            ...this.state,
            title: data
        }
        this.trigger(this.state);
    },

    findTitleFailed:function(){
    },
})

export default {homeStore}
