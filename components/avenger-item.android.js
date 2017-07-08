import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
}  from 'react-native';
import styles from './styles';

export default class AvengerItem extends Component {
  constructor(props) {
    super(props);
     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
      <View style={styles.container}>
        <Image
          source={{uri: this.props.avenger.image_url}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.avenger.name}</Text>
          <Text style={styles.year}>{this.props.avenger.description}</Text>
        </View>
      </View>
    );
  }

}
