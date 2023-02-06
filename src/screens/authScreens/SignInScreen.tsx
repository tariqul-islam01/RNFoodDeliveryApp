import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, SocialIcon} from 'react-native-elements';

export default function SignInScreen(): JSX.Element {
  const [texInputToFocsed, setTexInputToFocsed] = useState(false);
  const testInput1 = useRef(1);
  const testInput2 = useRef(2);
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
          <TextInput
            ref={testInput1}
            style={styles.textInput1}
            placeholder="Email"
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View
            animation={texInputToFocsed ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              type="evilicon"
              iconStyle={{color: colors.grey3}}
            />
            {/* <TextInput style={styles.textInput1} placeholder="Password" /> */}
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={testInput2}
            onFocus={() => {
              setTexInputToFocsed(false);
            }}
            onBlur={() => {
              setTexInputToFocsed(true);
            }}
          />
          <Animatable.View
            animation={texInputToFocsed ? '' : 'fadeInLeft'}
            duration={400}>
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
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Button
          title={'Sign in'}
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={(styles.text1, {textDecorationLine: 'underline'})}>
          Forgot Password?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View>
        <SocialIcon
          iconType="evilicon"
          title="Sign In with Facebbok"
          button
          type="sc-facebook"
          style={styles.facebook}
        />
      </View>
      <View>
        <SocialIcon
          iconType="evilicon"
          title="Sign In with Google"
          button
          type="sc-google-plus"
          style={styles.google}
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <Text style={(styles.text1, {textDecorationLine: 'underline'})}>
          New on XpressFood?
        </Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          title={'Create an account'}
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
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
  facebook: {
    backgroundColor: '#1977F2',
    color: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  google: {
    backgroundColor: '#EA4335',
    color: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
