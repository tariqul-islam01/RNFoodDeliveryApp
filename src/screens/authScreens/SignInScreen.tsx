import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../../components/Header';
import {colors, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'react-native-elements';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Header title="My Accounty" iconName="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Refistered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.textInput1} placeholder="Email" />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View>
            <Icon
              name="lock"
              type="evilicon"
              iconStyle={{color: colors.grey3}}
            />
            {/* <TextInput style={styles.textInput1} placeholder="Password" /> */}
          </Animatable.View>
          <TextInput style={{width: '80%'}} placeholder="Password" />
          <Animatable.View>
            <Icon
              name="minus"
              type="evilicon"
              iconStyle={{color: colors.grey3}}
              style={{marginRight: 10}}
            />
            {/* <TextInput style={styles.textInput1} placeholder="Password" /> */}
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 16,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
  },
});
