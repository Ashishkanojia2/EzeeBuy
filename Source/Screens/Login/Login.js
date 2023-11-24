import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, modrateScale} from 'recat-native-size-matters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = props => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('../.././Assets/sport1.jpg')}
          style={{height: windowHeight, width: windowWidth}}
        />
      </View>
      <View style={{backgroundColor: '#000', height: 100, width: 100}}>
        <Text style={{color: 'green'}}>yes its working</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
