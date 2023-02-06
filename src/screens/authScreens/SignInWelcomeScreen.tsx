import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Swiper autoplay={true} style={{height: 250}}>
          <View style={styles.slide1}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://images.unsplash.com/photo-1615996001375-c7ef13294436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
              }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://images.unsplash.com/photo-1620646146961-fb8c077b6b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://images.unsplash.com/photo-1627378378952-a736d8e12219?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://images.unsplash.com/photo-1598515213692-5f252f75d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
              }}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
