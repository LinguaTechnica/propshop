import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App Component', function() {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
