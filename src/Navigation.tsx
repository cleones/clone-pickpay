import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './page/Home';
import Wallet from './page/Wallet';
import Pay from './page/Pay';
import Notifications from './page/Notifications';
import Settings from './page/Settings';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();
interface IconBar {
  lib: any;
  name: string;
}
interface IncoType {
  Home: IconBar;
  Wallet: IconBar;
  Notifications: IconBar;
  Settings: IconBar;
  [index: string]: IconBar;
}

const icons: IncoType = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { name: routeName } = route;
          if (routeName === 'Pay') {
            return (
              <PayButton
                onPress={() => {
                  navigation.navigate('Pay');
                }}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[routeName];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name='Pay'
        component={Pay}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{
          title: 'Notificação',
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Ajustes ',
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
