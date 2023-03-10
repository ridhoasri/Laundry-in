import React, { Component } from 'react';
import { Text, Pressable, View, StyleSheet, Image, ScrollView, Alert} from 'react-native';

export default class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.gambar} source={require('../assets/icon1.png')} />
        <View style={styles.bargo}>
          <Text style={styles.header}>ANTAR - JEMPUT EXPRESS</Text>
          <Text style={styles.sub}>
          Kamu cukup duduk manis dirumah sambil nonton drakor kesayangan, masalah cucian sampe setrikaan biar kami yang kerjakan.
          </Text>
          <Pressable
            style={styles.button}
            onPress={()=>{this.props.navigation.navigate("Pesanan")}}>
            <Text style={styles.btext}>Order Sekarang</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbe4f3",
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    flex: 1,
    width: 180,
    height: 180,
    backgroundColor: 'green',
  },
  
  gambar: {
    marginTop: '20%',
    width: 180,
    height: 180,
    marginBottom: 70,
  },

  bargo: {
    width: '85%',
    height: 350,
    backgroundColor: '#2396f2',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },


  header: {
    fontSize: 38,
    color: '#ffff',
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: 'center',
  },

  sub: {
    width: '85%',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 13,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 30,
  },

  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 13,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 10,
  },

  btext: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'black',
  },
});
