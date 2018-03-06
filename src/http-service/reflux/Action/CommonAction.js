import Reflux from 'reflux'
import axios from 'axios'

let {commonActions} = module['exports'] && module['exports']['default'] ? module.exports.default : {}

if(module.hasOwnProperty('commonActions')){
    commonActions = module.commonActions     
}else{
    commonActions = Reflux.createActions([
        "findMember", "findMemberSuccess", "findMemberFailed",
        "findMemberDetail", "findMemberDetailSucess", "findMemberDetailFailed",
        "findProduct", "findProductSuccess", "findProductFailed",
        "findTitle", "findTitleSucess", "findTitleFailed"
    ])
    
    commonActions.findMember.preEmit = () => {
        axios({
            method:'get',
            url:'/member',
            responseType:'json'
        }).then(function(response) {
            const {data} = response;            
            commonActions.findMemberSuccess(data)
        }).catch(function (error) {
            commonActions.findMemberFailed(error)
        })
    }

    commonActions.findProduct.preEmit = () => {
        axios({
            method:'get',
            url:'/product',
            responseType:'json'
        }).then(function(response) {
            const {data} = response;            
            commonActions.findProductSuccess(data)
        }).catch(function (error) {
            commonActions.findProductFailed(error)            
        })
    }

    commonActions.findMemberDetail.preEmit = (id) => {       
        axios({
            method:'get',
            url:`/member/${id}`,
            responseType:'json'
        }).then(function(response) {
            const {data} = response;            
            commonActions.findMemberDetailSucess(data)
        }).catch(function (error) {
            commonActions.findMemberDetailFailed(error)            
        })
    }

    commonActions.findTitle.preEmit =() => {
        axios({
            method:'get',
            url:'/title',
            responseType:'json'
        }).then(function(response) {
            const {data} = response;            
            commonActions.findTitleSucess(data)
        }).catch(function (error) {
            commonActions.findTitleFailed(error)            
        })
    }
}
export default commonActions