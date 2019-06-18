import PropertyListingList from '../components/listingsList'

describe('PropertyListingList Component', function() {
    it('should render without throwing an error', () => {
        sinon.stub(PropertyListingList.prototype);
        const wrapper = shallow(<PropertyListingList listings={ [{name: 'some listing'}] } />);
        expect(wrapper).toBeTruthy();
    });
});
