// @flow
// The basic view stack that's used on all of our screens
// Any view that's added here can be visited from any of our tabs
import Thread from '../Thread';
import Community from '../Community';
import Channel from '../Channel';
import User from '../User';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import type { NavigationScreenConfigProps } from 'react-navigation';

const BaseStack = {
  Thread: {
    screen: withMappedNavigationProps(Thread),
    navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
      headerTitle: navigation.getParam('title', null),
      tabBarVisible: false,
    }),
  },
  Community: {
    screen: withMappedNavigationProps(Community),
    navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
      headerTitle: navigation.getParam('title', null),
    }),
  },
  Channel: {
    screen: withMappedNavigationProps(Channel),
    navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
      headerTitle: navigation.getParam('title', null),
    }),
  },
  User: {
    screen: withMappedNavigationProps(User),
    navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
      headerTitle: navigation.getParam('title', null),
    }),
  },
};

export default BaseStack;
