import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet } from 'react-native'
import {
  faHome,
  faChartLine,
  faList,
  faUsers,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

import HomeStack from '../HomeStack/HomeStack'
import GraphStack from '../GraphStack/GraphStack'
import LogsStack from '../LogsStack/LogsStack'
import ProfileStack from '../ProfileStack/ProfileStack'
import { AppStackParamList } from './AppStackParamList'
import { colors, margins } from '../../theme'
import { HeaderButton, HeaderLogo } from '../../components/ui'
import { scale } from 'react-native-size-matters'

const Tab = createBottomTabNavigator<AppStackParamList>()

const Appstack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabMenu,
        headerStyle: styles.header,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: colors.black,
          tabBarActiveTintColor: colors.pink,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={23} />
          ),
          headerTitle: '',
          headerRight: () => {
            return (
              <HeaderButton
                icon={faBell}
                iconSize={20}
                iconColor={colors.black}
                onPress={() => {
                  navigation.navigate('Notifications')
                }}
                style={styles.marginRight}
              />
            )
          },
          headerLeft: () => {
            return (
              <HeaderLogo
                source={require('../../assets/images/logoFull.png')}
                title="Home"
                style={styles.headerLogo}
              />
            )
          },
        })}
      />
      <Tab.Screen
        name="GraphStack"
        component={GraphStack}
        options={({ navigation }) => ({
          tabBarLabel: 'Graphs',
          tabBarInactiveTintColor: colors.black,
          tabBarActiveTintColor: colors.pink,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faChartLine} color={color} size={23} />
          ),
          headerTitle: '',
          headerRight: () => {
            return (
              <HeaderButton
                icon={faBell}
                iconSize={20}
                iconColor={colors.black}
                onPress={() => {
                  navigation.navigate('Notifications')
                }}
                style={styles.marginRight}
              />
            )
          },
          headerLeft: () => {
            return (
              <HeaderLogo
                source={require('../../assets/images/logoFull.png')}
                title="Graphs"
                style={styles.headerLogo}
              />
            )
          },
        })}
      />
      <Tab.Screen
        name="LogsStack"
        component={LogsStack}
        options={({ navigation }) => ({
          tabBarLabel: 'Logs',
          tabBarInactiveTintColor: colors.black,
          tabBarActiveTintColor: colors.pink,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faList} color={color} size={23} />
          ),
          headerTitle: '',
          headerRight: () => {
            return (
              <HeaderButton
                icon={faBell}
                iconSize={20}
                iconColor={colors.black}
                onPress={() => {
                  navigation.navigate('Notifications')
                }}
                style={styles.marginRight}
              />
            )
          },
          headerLeft: () => {
            return (
              <HeaderLogo
                source={require('../../assets/images/logoFull.png')}
                title="Logs"
                style={styles.headerLogo}
              />
            )
          },
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({ navigation }) => ({
          tabBarLabel: 'Profile',
          tabBarInactiveTintColor: colors.black,
          tabBarActiveTintColor: colors.pink,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUsers} color={color} size={23} />
          ),
          headerTitle: '',
          headerRight: () => {
            return (
              <HeaderButton
                icon={faBell}
                iconSize={20}
                iconColor={colors.black}
                onPress={() => {
                  navigation.navigate('Notifications')
                }}
                style={styles.marginRight}
              />
            )
          },
          headerLeft: () => {
            return (
              <HeaderLogo
                source={require('../../assets/images/logoFull.png')}
                title="Your profile"
                style={styles.headerLogo}
              />
            )
          },
        })}
      />
    </Tab.Navigator>
  )
}

export default Appstack

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: colors.blue,
    borderRadius: 10,
  },
  tabMenu: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerLogo: {
    marginLeft: margins.lg,
    marginBottom: scale(margins.xs),
  },
  marginRight: {
    marginRight: margins.lg,
    marginBottom: scale(margins.xs),
  },
})
