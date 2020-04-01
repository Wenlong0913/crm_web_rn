
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {testRequest} from '../../services'


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  测试接口调用成功后 显示接口内容
      testState: '',
    };
  }
  async componentDidMount(){
    const {data} = await testRequest();
    this.setState({testState: data[0].team})
  }
  render() {
    const {testState} = this.state;
    return (
      <SafeAreaView>
        <View>
          <Text>副页</Text>
          <Text>接口返回的参数 {testState}</Text>
        </View>
      </SafeAreaView>
    )
  }
}
MainPage.navigationOptions = () => {
  return {
    title: '副页',
    headerBackTitle: '返回',
  };
};
export default MainPage;
