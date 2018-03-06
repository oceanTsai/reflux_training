import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../../http-service/view/container/Home.jsx'
import FooterInfo from '../view/component/FooterInfo.jsx'
import Dialog from '../view/component/Dialog.jsx'
import commonActions from '../reflux/Action/CommonAction.js'
import homeActions from '../reflux/Action/HomeAction.js'
import dialogActions from '../reflux/Action/DialogAction.js'
import {homeStore} from '../reflux/Store/HomeStore.js'
import {dialogStore} from '../reflux/Store/DialogStore.js'

;(function(){

    ReactDOM.render(
        <h1>模式一 由入口程序當作管理容器，與多store</h1>,
        document.getElementById('header')
    )
    
    const homeRef = ReactDOM.render(
        <Home
            action={{
                ...commonActions,
                ...homeActions,
                ...dialogActions
                }}
            store={homeStore}
        >
        </Home>,
        document.getElementById('body')
    )
    
    ReactDOM.render(
        <FooterInfo mail="in.exit.f2e@gamil.com">
        </FooterInfo>,
        document.getElementById('footer')
    )

    //這一是各有狀態元件，不可以如此使用，這裡是故意作已經使用範例，並且遇到該如何解
    const dialogRef = ReactDOM.render(
        <Dialog
            {...dialogStore.getInitialState()}
            title="已挑選清單"
            cancelLabel="取消"
            confirmLabel="確認"
            confirmClick={(event)=>{
                dialogActions.isConfirmChange(false)
                commonActions.findTitle()
            }}
            cancelClick={(event)=>{
                dialogActions.isConfirmChange(false)                
            }}
        >
        <div>
            這是一個confirm測試
        </div>
        </Dialog>,
        document.getElementById('dialogStage')
    )

    const dialogStoreChanged = (state) => {
        dialogRef.setState({
            isShow : state.confirmIsShow
        })
    }
    const dialogStoreUnsubscribe = dialogStore.listen(dialogStoreChanged)
})();
