import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from '../components';

const Details = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${route.params.poster_path}`,
        }}></Image>
      <Card
        title={route.params.original_title || route.params.name}
        subtitle={route.params.original_language.toUpperCase()}
        description={`${route.params.overview.substring(0, 400)}...`}
        navigation={navigation}></Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    zIndex: 5,
  },
});

export default Details;
