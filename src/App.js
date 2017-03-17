import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {ShopitemForm, ShopitemList, Footer} from './components/shopitem/'
import {addShopitem, generateId, findById, toggleShopitem, updateShopitem, removeShopitem, filterShopitems} from './lib/shopitemHelpers'
import {pipe, partial} from './lib/utils'
import {loadShopitems, createShopitem, saveShopitem, destroyShopitem} from './lib/shopitemService'

class App extends Component {
  state = {
    shopitems: [],
    currentShopitem: ''
  }
  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadShopitems()
    .then(shopitems => this.setState({shopitems}))
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedShopitems = removeShopitem(this.state.shopitems, id)
    this.setState({shopitems: updatedShopitems})
    destroyShopitem(id)
      .then(() => this.showTempMessage('Item Removed'))
  }

  handleToggle = (id) => {
    const getToggleShopitem = pipe(findById, toggleShopitem)
    const updated = getToggleShopitem(id, this.state.shopitems)
    const getUpdatedShopitems = partial(updateShopitem, this.state.shopitems)
    const updatedShopitems = getUpdatedShopitems(updated)
    this.setState({shopitems: updatedShopitems})
    saveShopitem(updated)
      .then(() => this.showTempMessage('Shopping item updated!'))
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    if(this.state.currentShopitem) {
  }
  const newId = generateId()
  const newShopitem = {id: newId, name: this.state.currentShopitem, isComplete: false}
  const updatedShopitems = addShopitem(this.state.shopitems, newShopitem)
  this.setState({
    shopitems: updatedShopitems,
    currentShopitem: '',
    errorMessage: ''
  })
  createShopitem(newShopitem)
    .then(() => this.showTempMessage('Shopping Item added'))
  }
  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }
  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a shopping item'
    })
  }
  handleInputChange = (evt) => {
    this.setState({
      currentShopitem:   evt.target.value
    })
  }
  render() {
    const submitHandler = this.state.currentShopitem ? this.handleSubmit : this.handleEmptySubmit
    const displayShopitems = filterShopitems(this.state.shopitems, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shopping List</h2>
        </div>
        <div className="Shopping-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          {this.state.message && <span className='success'>{this.state.message}</span>}
          <ShopitemForm handleInputChange={this.handleInputChange}
          currentShopitem={this.state.currentShopitem}
          handleSubmit={submitHandler}/>
          <ShopitemList handleToggle={this.handleToggle}
          shopitems={displayShopitems}
          handleRemove={this.handleRemove}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
