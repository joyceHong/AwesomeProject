
import React, { Component } from 'react';
import { AppRegistry, ListView,ScrollView,Image,TouchableOpacity,Text, View, StyleSheet } from 'react-native';

var THUMB_URLS = [
  require('./imgs/like.png'),
  require('./imgs/dislike.png'),
  require('./imgs/call.png'),
  require('./imgs/fist.png'),
  require('./imgs/bandaged.png'),
  require('./imgs/flowers.png'),
  require('./imgs/heart.png'),
  require('./imgs/liking.png'),
  require('./imgs/party.png'),
  require('./imgs/poke.png'),
  require('./imgs/superlike.png'),
  require('./imgs/victory.png'),
  ];

class ListViewDemo extends Component {

    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
       dataSource: ds.cloneWithRowsAndSections(this.getRows()),
    };
  }
      getRows(){
        let dataObj = {}
        let section = '测試1'
        dataObj[section] = []
        for (let i=0;i<10;i++){
            let data = {
                name:'第'+i+'行',
                num:i
            }
            dataObj[section][i] = data
        }
        section = '测試2'
        dataObj[section] = []
        for (let i=0;i<10;i++){
            let data = {
                name:'第'+i+'行',
                num:i
            }
            dataObj[section][i] = data
        }
       section = '测試3'
        dataObj[section] = []
        for (let i=0;i<10;i++){
            let data = {
                name:'第'+i+'行',
                num:i
            }
            dataObj[section][i] = data
        }
         section = '测試4'
        dataObj[section] = []
        for (let i=0;i<10;i++){
            let data = {
                name:'第'+i+'行',
                num:i
            }
            dataObj[section][i] = data
        }
        return dataObj
    }

   renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(sectionID);
         var imgSource = THUMB_URLS[rowID];
        return (
            <View style={styles.rowItem}>
                <View style={styles.rowItemLeft}>
                       <Image style={styles.thumb} source={imgSource}  resizeMode={"cover"}  />
                </View>
                <View style={styles.rowItemRight}>
                    <Text style={styles.rowItemText}>数据：{rowData.num} </Text>
                </View>
            </View>
        )
    }
   onEndReached(e){
        //console.log(e)
    }
    renderSectionHeader(sectionData, sectionID){
        console.log(sectionData)
        return(
            <View style={styles.rowTite}>
                <Text>{sectionID}</Text>
            </View>
        )
    }
    onChangeVisibleRows(visibleRows, changedRows){
        //console.log(visibleRows)
    }
    render() {
    return (
     <ListView
              style={styles.body}
              onEndReached = {this.onEndReached}
              onEndReachedThreshold = {20}
              renderSectionHeader = {this.renderSectionHeader}
              onChangeVisibleRows = {this.onChangeVisibleRows}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />
    );
  }
}

var styles = StyleSheet.create({
  body:{
        flex:1,
    },
    rowItem:{
        flex:1,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    },
    rowTite:{
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ccc',
    },
    rowItemLeft:{
        flex:1,    
        borderRightColor:'#ccc',
    },
    rowItemRight:{
        flex:3,
    },
    rowItemText:{
        textAlign:'center'
    },
  thumb: { 
    width: 30,
    height:30
  },
});
module.exports = ListViewDemo;