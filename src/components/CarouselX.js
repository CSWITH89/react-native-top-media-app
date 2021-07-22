import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel, {PaginationLight} from 'react-native-x2-carousel';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../consts/Layout';

const CarouselX = ({data, navigation, ...rest}) => {
  const renderItem = item => (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => navigation.navigate('Details', item)}
      style={{flex: 1}}>
      <View style={styles.item}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
          }}></Image>
        <View style={styles.textWrapper}>
          <Text style={styles.overview}>{`${item.overview.substring(
            0,
            100,
          )}...`}</Text>
          <Text style={styles.titleText}>
            {item.original_title || item.name}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={data}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#e2e6e9',
    width: SCREEN_WIDTH * 0.88,
    height: SCREEN_HEIGHT * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    zIndex: 5,
  },
  textWrapper: {
    width: SCREEN_WIDTH * 0.7,
    position: 'absolute',
    bottom: 30,
    left: 30,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10,
  },
  overview: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CarouselX;
