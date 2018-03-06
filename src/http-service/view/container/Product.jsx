import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RadioSelect from '../component/RadioSelect.jsx'
import FooterInfo from '../component/FooterInfo.jsx'
import Dialog from '../component/Dialog.jsx'

/**
 * @author
 * @name 
 * @class
 * @description
 */
export default class Product extends Component {

  constructor(props) {
    super(props)
    const {store} = props
    this.unsubscribe = null
    this.state = store ? store.getInitialState() : {}
  }

  radioSelectChanged = (event, item, oldItem) => {
    this.props.action.checkedProductChange(item.value)
  }

  showConfirm = () => {

  }

  hideConfirm = () => {
    
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
    const {productList, checkedProduct} = this.state;
    return (
      <div className='container'>
          <h1>模式2，由React Component作為管理容器</h1>
          <RadioSelect
            labelKey="name"
            valueKey="pid"
            source={productList}
            onChange={this.radioSelectChanged}
            checked={checkedProduct}
          >
          </RadioSelect>
          <div className="confirm-wrap">
            <button>show confirm</button>
          </div>
          <FooterInfo mail="in.exit.f2e@gamil.com">
          </FooterInfo>
          <Dialog
            //isShow={true}
          >
        </Dialog>
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
    this.props.action.findProduct()
  }

  componentWillUnmount(){
    //組件卸載時觸發
    this.unsubscribe()
  }

  storeChange = (nextState) => {
    this.setState(nextState)
  }
}

Product.proptypes = {
  action: PropTypes.object,
  store: PropTypes.object,
  productList: PropTypes.array,
  checkedProduct: PropTypes.any 
}

Product.defaultProps = {
  i18n : {
  }
}

