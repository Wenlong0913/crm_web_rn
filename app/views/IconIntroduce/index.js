
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { list } from './data.js'

function IconIntroduce(props) {
  const { navigation } = props;
  return (
    <>
      {
        list.map((item, index) => {
          const { icon, name } = item;
          return (
            <View
              key={index}
              style={styles.listItem}>
              <Image source={icon} style={styles.listIcon} />
              <Text style={styles.listText}>{name}</Text>
            </View>
          )
        })
      }
    </>
  )
}
IconIntroduce.navigationOptions = ({ navigation }) => {
  return {
    title: '图示介绍',
    headerBackTitle: '返回',
  }
};

const styles = StyleSheet.create({
  listItem: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(237, 225, 225)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  listText: {
    color: 'rgb(84, 84, 84)',
    fontSize: 16,
  },
  listIcon: {
    width:24,
    height:24,
    resizeMode:'contain',
    marginRight: 21,
  },
});

export default IconIntroduce;