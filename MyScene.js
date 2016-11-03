import React, { Component,PropTypes  } from 'react';
import { View, Text, Navigator,StyleSheet,TouchableHighlight  } from 'react-native';

var styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1   //Step 3
    }
});

class MyScene extends Component {

static PropTypes={
  title: PropTypes.string.isRequired,
  onForward:PropTypes.func.isRequired,
  onBack:PropTypes.func.isRequired
}
  render() {
    return (
     <View style={styles.toolbar}>

      <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.toolbarButton}>back</Text>
        </TouchableHighlight>
        <Text style={styles.toolbarTitle}> {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={styles.toolbarButton}>next</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
module.exports=MyScene;
