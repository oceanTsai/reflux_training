import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import GeneralButtonStyle  from '../../builder/css/component/GeneralButton.css'

/**
 * @author
 * @name 
 * @class
 * @description
 */
export default class GeneralButton extends Component {

  constructor(props) {
    super(props)
    this.state = this._extractState(props)
  }

  _extractState = (props) => {
    const {value, index, label, active} = props
    return {value, index, label, active}
  }

  _onClick = (event) =>{
    const {onClick} = this.props
    const {index, value} = this.state
    onClick && onClick(event, {index, value})
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
    const {label, active} = this.state;
    return (
      <div className={classnames({
              'general-button': true,
              'active' : active
            })} 
           onClick={this._onClick}
           >{label}
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

GeneralButton.proptypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  index: PropTypes.number,
  value: PropTypes.any,
  active: PropTypes.bool 
}

GeneralButton.defaultProps = {
}