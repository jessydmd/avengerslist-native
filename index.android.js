/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
} from 'react-native';
import Header from './components/header';
import AvengerItem from './components/avenger-item';
import styles from './components/styles';

const REQUEST_URL = 'https://calm-spire-67121.herokuapp.com/api/v1/avengers.json';

export default class AvengersNative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      filterText : ""
    };
  }


  componentDidMount() {
    this.fetchData();
  }

 fetchData() {
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        result: responseData,
        loaded: true,
      });
    })
    .done();
 }

 handleFilterTextInput(filterText) {
   const filteredList = this.state.result.filter(avenger => avenger.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

    this.setState({
      filterText: filterText,
      dataSource: this.state.dataSource.cloneWithRows(filteredList)
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <Header filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput.bind(this)} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
          enableEmptySections={true}
        />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement...
        </Text>
      </View>
    );
  }

  renderMovie(avenger) {
    return (
      <AvengerItem avenger={avenger} />
    );
  }

}


AppRegistry.registerComponent('AvengersNative', () => AvengersNative);
