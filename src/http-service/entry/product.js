import React from 'react'
import ReactDOM from 'react-dom'
import Product from '../../http-service/view/container/Product.jsx'
import commonActions from '../reflux/Action/CommonAction.js'
import productActions from '../reflux/Action/ProductAction.js'
import {productStore} from '../reflux/Store/ProductStore.js'

//這一層只能是 container or status less components
;(function(){
    ReactDOM.render(
        <Product
            action={{
                ...commonActions,
                ...productActions
                }}
            store={productStore}
        >
        </Product>,
        document.getElementById('root')
    )
    /*
    const glob_ProductStoreChanged = (state) => {
    }
    const globUnsubscribe = homeStore.listen(glob_ProductStoreChanged)
    */
})();
