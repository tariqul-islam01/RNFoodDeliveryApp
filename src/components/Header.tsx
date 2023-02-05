import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({
  title,
  iconName,
}: {
  title: string;
  iconName: string;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.IconView}>
        <Icon
          name={iconName}
          type="evilicon"
          color={colors.headerText}
          size={28}
        />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  IconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
