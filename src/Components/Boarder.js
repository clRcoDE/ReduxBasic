import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import { connect } from 'react-redux'



 class Boarder extends Component {
  render() {
    return (
      <View style={styles.container}></View>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"royalblue"
    }
});

// const mapStateToProps = (state) => {
//   return{
//       count:state.count
//   }
// };
// export default connect(state=>state)(Boarder)


