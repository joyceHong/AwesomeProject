'use strict';
 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import MyScene from './MyScene';
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
class Feature extends Component {
    render() {
        return (
  	     <Navigator
           initialRoute={{title:"my Initial Scene", index:0}}
           renderScene={(route,navigator)=>{
             return   <MyScene title={route.title}
                 onForward={()=>{
                    const nextIndex=route.index+1;
                    navigator.push({
                        title:"Scene_"+nextIndex,
                        index:nextIndex,
                    });
                 }}
                onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                   }}
                />
           }}
           />
        );
    }
}
module.exports = Feature;