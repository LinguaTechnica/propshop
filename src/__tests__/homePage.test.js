import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../components/pages/home';
import LoginPage from '../components/pages/login';

describe('HomePage Component', function() {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).toBeTruthy();
    });

    it('should render login form when authenticated false', () => {
        const wrapper = shallow(<HomePage isAuthenticated={ false } />);
        expect(wrapper.find(LoginPage)).toHaveLength(1);
    });

    it('should NOT render login form when authenticated true', () => {
        const wrapper = shallow(<HomePage isAuthenticated={ true } />);
        expect(wrapper.find(LoginPage)).toHaveLength(0);
    });
});
