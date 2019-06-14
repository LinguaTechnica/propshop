import LoginPage from '../components/login';

describe('LoginPage Component', function() {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toBeTruthy();
    });
});
