import HomePage from '../components/home';
import LoginPage from '../components/login';

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
