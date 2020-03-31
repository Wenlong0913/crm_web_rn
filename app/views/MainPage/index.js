
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

function MainPage(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>副页</Text>
      </View>
    </SafeAreaView>
  )
}
MainPage.navigationOptions = () => {
  return {
    title: '副页',
    headerBackTitle: '返回',
  };
};
export default MainPage;