import React, { Component } from 'react';
import {
  View,
  TextInput
}  from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
      <View>
        <TextInput
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
          placeholder="Chercher un Avenger..."
        />
      </View>
    );
  }
}
