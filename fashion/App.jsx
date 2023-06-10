import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Post } from './components/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Post username="dlathyun" image="https://robohash.org/e3b6d21a1269474ee9ac1bcdb33e5bda?set=set4&bgset=&size=400x400" />
      <Post username="shyim" image="https://robohash.org/ecece83c2576987dd4caa10980d5e7fd?set=set4&bgset=&size=400x400"/>
      <Post username="john" image="https://robohash.org/8d2fd73bfc784549116dcdeb42f8e084?set=set4&bgset=&size=400x400"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
