import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';


class TranslationText {
  @observable text = '';
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
          onChangeText={(input) => store.text = input}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {store.translation}
        </Text>
      </View>
    );
  }
}

export default App;


//       <View style={{
//         backgroundColor: '#222',
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//
//         <Image style={{width: 80, height: 80, borderRadius: 50}}
//           source={require('./assets/cookieMonster.jpg')}/>
//
//         <View style={styles.circle} />
//         <View style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
//
//  const styles = StyleSheet.create({
//       circle: {
//         width: 80,
//         height: 80,
//         borderRadius: 50,
//         backgroundColor: 'skyblue'
//       }
//  });
