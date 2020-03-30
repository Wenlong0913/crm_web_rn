
import React from 'react';
import { AppRegistry, Platform } from 'react-native';
// import App from './App';
import AppIndex from './app/CrmApp.js'
import { name as appName } from './app.json';

function AppWarp(props) {
  console.log(' 模拟器平台信息--->>>', Platform);
  return (
    <AppIndex pf={Platform} />
  )
}

AppRegistry.registerComponent(appName, () => AppWarp);
