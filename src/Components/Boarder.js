import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import {connect} from 'react-redux'




 class Boarder extends Component {
  render() {
    return (
      <View style={styles.container}><Text style={{fontSize:175,color:'#51a5ff'}}>{this.props.count}</Text></View>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"royalblue",
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
  return{
      count:state.count
  }
};

export default connect(mapStateToProps)(Boarder);


