import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

export default function Home () {
  const user = useSelector(state => state.session.user);

  return (
    <View style={styles.container}>
      <Text style={styles.basicText}>
        Hello, {(user && user.username) || 'new friend'}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  basicText: {
    fontSize: 50
  }
});
