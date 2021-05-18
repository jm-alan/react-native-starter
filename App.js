import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';

import configureStore from './assets/store/index';
import NavBar from './assets/components/NavBar/index';
import AbsoluteWrapper from './assets/components/AbsoluteWrapper';
import Home from './assets/components/Home';
import { restoreCSRF } from './assets/store/csrfetch';
import { RestoreUser } from './assets/store/session';
import { SetCurrent } from './assets/store/appPage';

const store = configureStore();

function WrappedApp () {
  const dispatch = useDispatch();

  const { Current } = useSelector(state => state.appPage);

  useEffect(() => {
    try {
      restoreCSRF();
      dispatch(RestoreUser());
    } catch (err) {}
  }, [dispatch]);

  useEffect(() => {
    dispatch(SetCurrent(Home));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <AbsoluteWrapper>
        {Current && <Current />}
      </AbsoluteWrapper>
      <NavBar />
    </SafeAreaView>
  );
}

export default function App () {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
