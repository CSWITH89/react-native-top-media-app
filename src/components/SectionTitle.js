import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SectionTitle = ({children}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#77DD77',
    marginVertical: 10,
  },
});

export default SectionTitle;
