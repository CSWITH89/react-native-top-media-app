import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../consts/Layout';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const PlayBtn = ({press}) => {
  return (
    <TouchableWithoutFeedback onPress={press}>
      <View style={styles.circle}>
        <FAIcon size={SCREEN_WIDTH * 0.05} color="#fff" name="play" />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    zIndex: 15,
    top: -30,
    right: 20,
    height: SCREEN_WIDTH * 0.16,
    width: SCREEN_WIDTH * 0.16,
    backgroundColor: '#779ecb',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlayBtn;
