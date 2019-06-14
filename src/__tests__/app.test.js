import App from '../App';
import Navbar from '../components/partials/navbar';

describe('App Component', function() {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

    it('should render Navbar without throwing an error', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Navbar)).toBeTruthy();
    });
});
