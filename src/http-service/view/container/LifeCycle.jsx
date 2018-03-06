import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Text from '../component/Text.jsx'

/**
 * @author
 * @name 
 * @class
 * @description
 */
export default class LifeCycle extends Component {

  constructor(props) {
    super(props)
    const {store} = props
    this.state = {name: 'JOJO'}
  }



  componentWillReceiveProps(nextProps){
    //此處setState不會觸發react lifecycle
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    //優化效能時使用，return將不觸發render
  }*/

  componentWillUpdate(nextProps, nextState){
    //render前觸發
  }

  render () {
    const {name = ''} = this.state
    return (
      <div className='container'>
        <Text text={name}></Text>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState){
    //render後觸發
  }

  componentWillMount(){
    //組件將要被掛載時觸發（只會觸發一次）
  }

  componentDidMount(){
    this.setState({name: '阿金'})
  }

  componentWillUnmount(){
    //組件卸載時觸發
  }


}

LifeCycle.proptypes = {
  action: PropTypes.object,
  store: PropTypes.object
}

LifeCycle.defaultProps = {
  i18n : {
  }
}

