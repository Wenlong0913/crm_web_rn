
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function AppIndex(props) {
  const { pf } = props;
  return (
    <SafeAreaView>
      <View>
        <Text>当前模拟器  {pf.OS}</Text>
      </View>
    </SafeAreaView>
  )
}
export default AppIndex;