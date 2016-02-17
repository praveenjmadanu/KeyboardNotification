/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
// React Native Package for Keyboard handling
// npm install --save react-native-keyboard-spacer
/*https://www.npmjs.com/package/react-native-keyboard-spacer*/

var KeyboardSpacer = require('react-native-keyboard-spacer');

var  {
  AppRegistry,
  Component,
  StyleSheet,
  AlertIOS,
  Text,
  View
} = React;

class KeyboardSample extends Component {

  render() {
    return (
      <View style={[{flex: 1}]}>
       <Image source={{uri: 'http://img11.deviantart.net/072b/i/2011/206/7/0/the_ocean_cherry_tree_by_tomcadogan-d41nzsz.png', static: true}}
               style={{flex: 1}}/>

       <TextInput style={{left: 0, right: 0, height: 45}}
            placeholder={'Enter your text!'}/>

       <TextInput style={{left: 0, right: 0, height: 45}}
            placeholder={'Enter your text1!'}/>

        <TextInput style={{left: 0, right: 0, height: 45}}
                 placeholder={'Enter your text2!'}/>

       <KeyboardSpacer/>

     </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },

  textField: {
    left: 0,
    right: 0,
    alignItems:'center',
    width: 200,
    margin: 5,
    height: 30,
    fontSize: 12,
    borderWidth: 1
  },
});

AppRegistry.registerComponent('KeyboardSample', () => KeyboardSample);
