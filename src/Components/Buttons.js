import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
// import {setIncrement , setDecrement} from '../Services/Counter/Actions'
// import {actions} from '../Services/Counter/Actions'
// import store  from  '../index'
import {connect} from 'react-redux'


 class Buttons extends Component {


// FireAction=(x)=>{
//     if(x>0){
// // console.warn(store)
//         this.props.dispatch({type:'INCREMENT'})
//         // setIncrement()
//     }else{

//         this.props.dispatch({type:'DECREMENT'})
//         // setDecrement()
//     }
// }


increament = () => {
  this.props.dispatch({
      type:'INCREMENT'
  })
};

decrement = () => {
  this.props.dispatch({
      type:'DECREMENT',
  })
}


  render() {
    return (
      <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column',}}>

      <View  style={{flex:1, justifyContent: "center", alignItems: "center" ,}} >
      <Text style={{ fontSize: 100, color: "#666", fontWeight: "800" }}>
            {this.props.count}
          </Text>
      </View  >
      </View>
      <View style={{flexDirection: 'row',flex:1}}>
        <TouchableHighlight
          style={{flex:1, justifyContent: "center", alignItems: "center" ,}}
          onPress={this.increament}
        >
          <Text style={{ fontSize: 100, color: "#666", fontWeight: "800" }}>
            +
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{flex:1, justifyContent: "center", alignItems: "center" ,}}
         
          onPress={this.decrement}
        >
          <Text style={{ fontSize: 100, color: "#666", fontWeight: "800" }}>
            -
          </Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    // justifyContent: 'center',
    // alignItems: 'center',
flexDirection: 'column',
  }
});

const mapStateToProps = (state) => {
  return{
      count:state.count
  }
};

export default connect(mapStateToProps)(Buttons);
