import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../consts/Layout';
import MarqueeText from 'react-native-marquee';

const CategoryCard = ({title}) => {
  return (
    <View style={styles.container}>
      {/* Marquee text used for longer category names as a nice effect  */}
      <MarqueeText
        style={styles.categoryTitle}
        duration={3000}
        marqueeOnStart
        loop
        marqueeDelay={1000}
        marqueeResetDelay={1000}>
        {title}
      </MarqueeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.26,
    width: SCREEN_WIDTH * 0.4,
    backgroundColor: '#77DD77',
    marginRight: 10,
    padding: 20,
  },
  categoryTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 28,
  },
});

export default CategoryCard;
