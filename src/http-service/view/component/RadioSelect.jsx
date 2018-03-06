import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import GeneralButton from './GeneralButton.jsx'
import radioSelectStyle  from '../../builder/css/component/RadioSelect.css'


/**
 * @author
 * @name 
 * @class
 * @description
 */
export default class RadioSelect extends Component {

  constructor(props) {
    super(props)
    this.state = this._extractState(props)
  }

  _extractState = (props) => {
    const {source, checked} = props
    const checkedList = source ? source.filter(({value})=>( value === checked)) : []
    return {
      oldItem : checkedList.length > 0 ? checkedList[0] : null,
      newItem : null,
      checked : checked
    }
  }

  _buttonOnClick = (event, item) => {
    this.props.onChange && this.props.onChange(event, item, this.state.oldItem)
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
    const {source, defaultButton, button, labelKey, valueKey} = this.props
    const {checked} = this.state
    const element = button || defaultButton
    return (
      <div className='radio-select'>
        {
          source 
            ? source.map((item, index)=>(
                React.createElement(element, {
                  label : item[labelKey],
                  value: item[valueKey],
                  active: checked === item[valueKey],
                  key: index,
                  index: index,
                  onClick : this._buttonOnClick
                })
            ))
            : null
        }
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

/**
 * @param {array}     source
 * @param {function}  onChange
 * @param {string}    defaultButton
 * @param {string}    button
 */
RadioSelect.proptypes = {
  source: PropTypes.array,
  onChange: PropTypes.func,
  defaultButton: PropTypes.element,
  button: PropTypes.element,
  checked: PropTypes.any
}

RadioSelect.defaultProps = {
  defaultButton: GeneralButton,
  labelKey: 'label',
  valueKey: 'value',
  checked: null
}

