import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RadioSelect from '../component/RadioSelect.jsx'
/**
 * @author
 * @name 
 * @class
 * @description container state 由 store 取得 不需再預設 state
 */
export default class Home extends Component {

  constructor(props) {
    super(props)
    const {store} = props
    this.unsubscribe = null
    this.state = store ? store.getInitialState() : {}
  }

  radioSelectChanged = (event, item, oldItem) => {
    this.props.action.checkedMemberChange(item.value)
    this.props.action.findMemberDetail(item.value)
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
    const {member, checkedMember, memberDetail, title} = this.state;
    const {age, skill} = memberDetail
    return (
      <div className='container'>
          <RadioSelect
            labelKey="name"
            valueKey="employeeID"
            source={member}
            onChange={this.radioSelectChanged}
            checked={checkedMember}
          >
          </RadioSelect>
          <div className="confirm-wrap">
            <button onClick={()=>{
              this.props.action.isConfirmChange(true)
            }}>show confirm</button>
          </div>
          <div style={{marginTop: '10px', color:"blue"}}>
            <p>
              <span>年齡</span>:<span>{age}</span>
            </p>
            <p>
              <span>必殺</span>:<span>{skill}</span>
            </p>
          </div>
          <div style={{marginTop: '10px', color: 'green'}}>
            {title.title}
          </div>
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
    this.unsubscribe = this.props.store.listen(this.storeChange)
    this.props.action.findMember()
  }

  componentWillUnmount(){
    //組件卸載時觸發
    //this.unsubscribe()
  }

  storeChange = (nextState) => {
    this.setState(nextState)
  }
  
}

Home.proptypes = {
  action: PropTypes.object,
  store: PropTypes.object,
  member: PropTypes.array,
  memberDetail: PropTypes.object,
  checkedMember: PropTypes.any 
}

Home.defaultProps = {
  i18n : {
  }
}

