import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

class App extends Component {

  state = {
    currentItem: 'chicken'
  }


  onChangeHandler = (event)=>{
    console.log('currentItem', event.target.value);
    this.setState = ({
        currentItem: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems item={this.state.currentItem}/>
        <CartFooter />
      </div>
    );
  }
}

export default App;
