
import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  AppRegistry,
  Platform,
  Button,
  StyleSheet,
} from 'react-native';
import App from './App';
import CrmApp from './app/CrmApp.js'
import { name as appName } from './app.json';
import Loading from './app/components/common/Loading.js';


function AppWarp(props) {
  const [loaded, setLoaded] = useState(false);
  const onPressLand = () => {
    setLoaded(true)
  }
  if(loaded){
    return <CrmApp />
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.warpText}>当前模拟器  {Platform.OS} </Text>
        <Button
          onPress={onPressLand}
          title="登陆"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  warpText: {
    width: '100%',
    textAlign: "center",
    color: "red"
  }
});

AppRegistry.registerComponent(appName, () => AppWarp);
