import React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

import Home from './Home';


describe('Testing Home Screen', () => {
  let wrapper;
  const mockNavigationFn = jest.fn().mockName('mockedFunction');

  beforeEach(() => {
    const navigation = { navigate: mockNavigationFn };
    wrapper = renderer.create(<Home navigation={navigation} />);
  });

  it('Renders Home screen with 1 child', () => {
    const home = wrapper.toJSON();
    expect(home.children.length).toBe(1);
  });

  it('Should run navigation on Button press', () => {

    wrapper.root.findByType(TouchableOpacity).props.onPress();

    expect(mockNavigationFn).toHaveBeenCalled();
  });
});