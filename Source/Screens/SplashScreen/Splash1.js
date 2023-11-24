import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React from 'react';

const Splash1 = () => {
  const OverBoarding = [
    {
      id: 1,
      title: 'Best Quality Product ',
      image: require('../.././Assets/Cloth_Modling.jpg'),
    },
    {
      id: 2,
      title: 'Trending Design ',
      image: require('../.././Assets/helo2.jpg'),
    },
    {
      id: 3,
      title: 'Reasonable Price',
      image: require('../.././Assets/helo3.jpg'),
    },
    {
      id: 4,
      title: 'Customer Stafication',
      image: require('../.././Assets/helo4.jpg'),
    },
  ];

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View>
      <FlatList
        data={OverBoarding}
        horizontal
        renderItem={({item}) => (
          <View style={{backgroundColor: '#000'}}>
            <Text>{item.title}</Text>
            <View style={{margin: 20, backgroundColor: '#fff'}}>
              <Image
                source={item.image}
                style={{height: windowHeight, width: windowWidth}}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Splash1;
