import React from 'react';
import ListingDetail from '../listing';
import { propertyListingService } from "../../services/listings";
import { SearchForm } from '../partials/search';

export default class PropertyListingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            searchResults: []
        };
        this.search = this.search.bind(this);
        this.resetListings = this.resetListings.bind(this);
        this.dynamicSearch = this.dynamicSearch.bind(this);
        this.createSearchElements = this.createSearchElements.bind(this);
    }

    /**
     * React Lifecycle Method
     * @desc minimalist state management; sends api request for fresh property data
     * before component renders
     */
    componentWillMount() {
        // TODO: can accept argument ownerId to get properties belonging to a user
        propertyListingService.getListings(1)
            .then((listings) => this.setState({ listings }))
            .catch(console.error)
    }

    /**
     * @desc create PropertyDetail elements
     * @return {PropertyDetail[]}
     */
    createPropertyElements() {
        // TODO: verify this expects listings with nested property (ex. {id: 1, property: {...}})
        return this.state.listings.map((listing) => {
            return <ListingDetail key={ listing.id } {...listing} {...listing.property} />
        })
    }

    /**
     * @desc creates PropertyDetail elements for search results
     * @return {*[]}
     */
    createSearchElements() {
        return this.state.searchResults.map((listing) => {
            return <ListingDetail key={ listing.id } {...listing} {...listing.property} />
        })
    }

    /**
     * Static Search
     * @desc users must click submit to see results
     * @param query
     */
    search(query) {
        const { listings } = this.state;
        const searchResults = listings.reduce((acc, listing) => {
             Object.keys(listing.property)
             // eslint-disable-next-line
                .map(k => {
                if (typeof(listing.property[k]) !== 'number') {
                    if (listing.property[k].toLowerCase().includes(query.toLowerCase())) {
                        acc.push(listing);
                    }
                }
            });
            return acc;
        }, []);

        this.setState({ searchResults })
    }

    /**
     * Dynamic Search
     * @desc results display as the user types
     * @param query
     */
    dynamicSearch(query) {
        const { listings } = this.state;
        if (query.length > 3) {
            const searchResults = listings.reduce((acc, listing) => {
                Object.keys(listing.property)
                // eslint-disable-next-line
                    .map(k => {
                        if (typeof(listing.property[k]) !== 'number') {
                            if (listing.property[k].toLowerCase().includes(query.toLowerCase())) {
                                acc.push(listing);
                            }
                        }
                    });
                return acc;
            }, []);

            this.setState({ searchResults })
        }
    }

    /**
     * @desc when search box is empty, re-display all current listings
     */
    resetListings(){
        this.setState({ searchResults: [] })
    }

    render() {
        const listings = this.createPropertyElements();
        const searchResults = this.createSearchElements();

        return (
            <div>
                <SearchForm search={ this.search } change={ this.dynamicSearch } reset={ this.resetListings } />
                <h1>My Listings</h1>
                { searchResults.length > 0 ? searchResults : listings }
            </div>
        );
    }
}
