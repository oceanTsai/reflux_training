import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

/**
 * @author
 * @name 
 * @class
 * @description Dialog
 */
export default class Text extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: props['text'] || ''
    }
  }

  ajaxCallBack = (response)=> { 
    const {data} = response;
    data.forEach(({name})=>{
      console.log('ajax----->', name)
      this.setState({text: name})
    })
  }
  componentWillReceiveProps(nextProps){
    //不要去call parent setState 會無限循環

    //這是一個不好的案例示範
    this.setState({text: nextProps['text']})
    this.setState({text: '1小路'})
    this.setState({text: '2小路'})
    this.setState({text: '3小路'})
    this.setState({text: '4小路'})
    this.setState({text: '5小路'})
    axios({method:'get', url:'/member', responseType:'json'})
      .then(this.ajaxCallBack)
      .catch(function (error) {})
    this.setState({text: '6小路'})
  }

  render () {
    const {text} = this.state;
    console.log('render', text)
    return (
      <div className=''>
        <span>{text || ''}</span>
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

Text.proptypes = {
}

Text.defaultProps = {
}