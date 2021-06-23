import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Bitcoin from 'react-native-bitcoinjs-lib';
import bitcoinLogo from './bitcoinlogo.png';

export default function App() {
  // console.log(Bitcion.ECPair.makeRandom())
  const keypair = Bitcoin.ECPair.makeRandom();

  return (
    <View style={styles.container}>

      <Image source={require( './bitcoinlogo.png' )} style={styles.image} />
      <Text style={styles.bigText}>
        <Text style={styles.label}>
          Address: {"\n"}
        </Text>
        {keypair.getAddress()}
      </Text>
      <Text style={styles.smallText}>
        <Text style={styles.label}>
          Private Key (WIF): {"\n"}
        </Text>
        {keypair.toWIF()}
        {"\n"}{"\n"}{"\n"}{"\n"}
      </Text>
      <StatusBar style="auto" />
      <Text style={{fontSize: 20, textAlign:"center"}}>
        This app generates new Bitcoin keys each time the app renders. {"\n"}
        Do not use this address to receive funds unless you have externally recorded the private key somewhere.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:4
  },
  bigText: {
    fontSize: 20,
    // maxWidth: ""
    fontWeight: "100",
    fontWeight: "500",
    textAlign: "center"
  },
  smallText: {
    fontSize: 20,
    fontWeight: "100",
    textAlign: "center"

  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    resizeMode: "center",
    top: 0,
    // borderTopWidth:0
  }
} );
