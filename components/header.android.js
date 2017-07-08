import React, { Component } from 'react';
import {
  View,
  TextInput
}  from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.nativeEvent.text);
  }

  render() {
    return(
      <View>
        <TextInput
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange.bind(this)}
          placeholder="Chercher un Avenger..."
        />
      </View>
    );
  }
}
