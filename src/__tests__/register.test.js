import React from 'react';
import { shallow } from 'enzyme';
import RegistrationPage from '../components/pages/registration';

describe('RegistrationPage Component', function() {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<RegistrationPage />);
        expect(wrapper).toBeTruthy();
    });
});
