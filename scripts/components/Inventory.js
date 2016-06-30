/*Inventory Component*/
import React from 'react';
import AddFishForm from '../components/AddFishForm';
// var Rebase = require('re-base');
import Rebase from 're-base';
var base = Rebase.createClass('https://ggcatch-of-the-day.firebaseio.com/');




var Inventory = React.createClass({
  renderInventory : function(key){
    var linkState = this.props.linkState;
    return (
      <div className="fish-edit" key={key}>
      <input type="text" valueLink={linkState('fishes.'+key+'.name')}/>
      <input type="text" valueLink={linkState('fishes.'+key + '.price')}/>
      <select valueLink={linkState('fishes.' + key + '.status')}>
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
      </select>
      <textarea valueLink={linkState('fishes.' + key + '.desc')}/>
      <input type="text" valueLink={linkState('fishes.'+key + '.image')}/>
      <button onClick={this.props.removeFish.bind(null, key)}>Remove Fish</button>
      </div>
      )
  },
  render: function(){
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}

        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  },
  propTypes : {
    addFish : React.PropTypes.func.isRequired,
    loadSamples : React.PropTypes.func.isRequired,
    fishes : React.PropTypes.object.isRequired,
    linkState : React.PropTypes.func.isRequired,
    removeFish : React.PropTypes.func.isRequired
  }

  
});

export default Inventory;