import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    backgroundColor: '#F5FCFF',
    marginBottom: 50
  }
});

export default styles;
