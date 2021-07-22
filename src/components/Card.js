import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../consts/Layout';
import {PlayBtn} from '../components';

const Card = ({title, subtitle, description, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text>{description}</Text>
      <PlayBtn press={() => navigation.navigate('Player')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 10,
    bottom: 30,
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH * 0.96,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
});

export default Card;
