import React from 'react'


export const ShopitemForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      onChange= {props.handleInputChange}
      value={props.currentShopitem}/>
  </form>)

  ShopitemForm.propTypes = {
    currentShopitem: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  }
