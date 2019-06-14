import RegistrationPage from '../components/registration';

describe('RegistrationPage Component', function() {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<RegistrationPage />);
        expect(wrapper).toBeTruthy();
    });
});
