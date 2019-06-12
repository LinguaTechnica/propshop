import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../components/pages/login';

describe('LoginPage Component', function() {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toBeTruthy();
    });
});
