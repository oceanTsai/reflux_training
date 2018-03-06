import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * @author
 * @name 
 * @description 這是一個無狀態元件測試
 */
const FooterInfo = (props) => {
    const {mail} = props
    return (
        <div>
            <p>前端從入門到放棄</p>
            <p>mail:{mail}
            </p>
        </div>
    )
}

export default FooterInfo;