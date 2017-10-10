import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import {observable, computed, action} from 'mobx';
import {observer} from 'mobx-react';


class TranslationText {
  @observable text = '';
  @action OnUsrInput(input) {
    return this.text = input;
  }
  @computed get translation() {
      return this.text.split(' ').map(word => word && '🍕').join(' ');
  }
}


 const store = new TranslationText();


@observer
class App extends React.Component {
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(input) => store.OnUsrInput(input)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {store.translation}
        </Text>
      </View>
    );
  }
}

export default App;
