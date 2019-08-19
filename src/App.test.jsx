import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App renders', () => {
  test('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });
});
