import React from 'react'
import {ShopitemItem} from './ShopitemItem'

export const ShopitemList = (props) => {
  return (
  <div className="Shopping-List">
    <ul>
      {props.shopitems.map(shopitem =>
        <ShopitemItem handleToggle={props.handleToggle} key={shopitem.id}{...shopitem} handleRemove={props.handleRemove}/>)}
    </ul>
  </div>
)
}


ShopitemList.propTypes = {
  shopitems: React.PropTypes.array.isRequired
}
