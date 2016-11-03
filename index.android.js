
import React, { Component,PropTypes  } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


var Featured = require('./Featured');
var ListViewBasics = require('./ListViewDemo');

class AwesomeProject extends Component {
       constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Featured'
        };
       }

  render() {
    return (
      <TabNavigator>
      <TabNavigator.Item  selected={this.state.selectedTab === 'Featured'}
           title="Featured"  onPress={() => this.setState({ selectedTab: 'Featured' })}>
           <Featured />
          </TabNavigator.Item>
          <TabNavigator.Item  selected={this.state.selectedTab === 'ListViewBasics'}
           title="ListViewBasics"  onPress={() => this.setState({ selectedTab: 'ListViewBasics' })}>
          <ListViewBasics />
          </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);