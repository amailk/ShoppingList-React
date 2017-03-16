import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {ShopitemForm, ShopitemList} from './components/shopitem/'
import {addShopitem} from './lib/shopitemHelpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      shopitems: [
        { id: 1, name: 'Egg', isComplete: false},
        { id: 2, name: 'Milk', isComplete: false},
        { id: 3, name: 'Orange', isComplete: false}
      ],
      currentShopitem: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (evt) {
    this.setState({
      currentShopitem:   evt.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shopping List</h2>
        </div>
        <div className="Shopping-App">
          <ShopitemForm handleInputChange={this.handleInputChange}
          currentShopitem={this.state.currentShopitem}/>
          <ShopitemList shopitems={this.state.shopitems}/>
        </div>
      </div>
    );
  }
}

export default App;
