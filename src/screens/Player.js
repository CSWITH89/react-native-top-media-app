import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const Player = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        controls={true}
        fullscreenAutorotate={true}
        fullscreenOrientation="landscape"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Player;
