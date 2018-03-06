import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DialogStyle from '../../builder/css/component/Dialog.css'

/**
 * @author
 * @name 
 * @class
 * @description Dialog
 */
export default class Dialog extends Component {

  constructor(props) {
    super(props)
    this.state = this._extractState(props)
  }

  _extractState = (props) => {
    const {icon, isShow, title, confirmLabel, cancelLabel} = props
    return {icon, isShow, title, confirmLabel, cancelLabel}
  }

  _confirmClick = (event) =>{
    const {confirmClick} = this.props
    confirmClick && confirmClick(event)
  }

  _cancelClick = (event)=>{
    const {cancelClick} = this.props
    cancelClick && cancelClick(event)
  }

  componentWillReceiveProps(nextProps){
    this.setState(this._extractState(nextProps))
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    //優化效能時使用，return將不觸發render
  }*/

  componentWillUpdate(nextProps, nextState){
  }

  render () {
    const {icon, isShow, title, confirmLabel, cancelLabel} = this.state;
    const {children} = this.props
    return (
      <div className={classnames({
          'dialog': true,
          'show' : isShow
          })}
          >
          <div className="dialog-container">
            <div className="header">
              <span className="title">{title}</span>
              <span className="close-button">X</span>
            </div>
           <div className="body">
             {
               children
             }
           </div>
            <div className="footer">
              {
                cancelLabel 
                  ?   <div className={classnames({
                          "cancel button": true,
                          "half" : confirmLabel && cancelLabel
                        })}
                        onClick={this._cancelClick}
                      >{cancelLabel}</div>
                  : null
              }
              {
                confirmLabel
                  ?  <div className={classnames({
                          "ok button": true,
                          "half" : confirmLabel && cancelLabel
                        })}
                        onClick={this._confirmClick}
                      >{confirmLabel}</div>
                  : null
              }
            </div>

          </div>
          
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState){
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }
}

Dialog.proptypes = {
  icon: PropTypes.string,
  isShow: PropTypes.bool,
  title: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmClick: PropTypes.func,
  cancelClick: PropTypes.func
}

Dialog.defaultProps = {
}