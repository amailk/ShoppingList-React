import React from 'react'


export const ShopitemForm = (props) => (
  <form>
    <input type="text"
      onChange= {props.handleInputChange}
      value={props.currentShopitem}/>
  </form>)

  ShopitemForm.propTypes = {
    currentShopitem: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired
  }
