import React from 'react'
import {ShopitemItem} from './ShopitemItem'
export const ShopitemList = (props) => {
  return (
  <div className="Shopping-List">
    <ul>
      {props.shopitems.map(shopitem => <ShopitemItem key={shopitem.id}{...shopitem}/>)}
    </ul>
  </div>
)
}


ShopitemList.propTypes = {
  shopitems: React.PropTypes.array.isRequired
}
