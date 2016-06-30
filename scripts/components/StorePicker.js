/* StorePicker Component Below*/

import React from 'react';
//var h = require('./helpers');
import h from '../helpers';

var StorePicker = React.createClass({
  //mixins :[History],//deprecated
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  goToStore : function(event){
    event.preventDefault();
    var storeId = this.refs.storeId.value;
   this.context.router.push('/store/'+storeId)

  },

  render : function(){
    
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*comments*/}
        <h2>Please Enter The Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
        
      </form>
      )
  }

});

export default StorePicker;