import request from 'superagent';
import { listingsEndpoint } from "../config";

/**
 * Property Service
 * @desc manages data storage of properties which can be accessed by any
 * component with access to localStorage
 */
export class PropertyListingService {
    constructor() {
        if (!localStorage.getItem('listings')) {
            localStorage.setItem('listings', JSON.stringify([]));
        }
        this.listings = JSON.parse(localStorage.getItem('listings'));

        this.get = this.get.bind(this);
        this.all = this.all.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.getListings = this.getListings.bind(this);
        this.updateStore = this.updateStore.bind(this);
    }

    /**
     * @desc fetch a property from storage
     * @return {object}
     */
    get(listId) {
        return this.listings.filter(list => list.id === listId)[0]
    }

    /**
     * @desc fetch listings from storage
     * @return {promise}
     */
    all() {
        return this.listings
    }

    /**
     * @desc send API request for all listings
     * @param userId: number, id of the owner
     * @return {promise}
     * TODO: Eventually need this to search by user_id
     */
    getListings(userId) {
        console.info('INFO', 'fetching listings...');
        return request.get(listingsEndpoint)
            .set('Content-Type', 'application/json')
            .then((res) => this.updateStore(res.body))
    }

    /**
     * @desc update localStorage with most recent property data from API
     * @param listings
     * @return {object}
     */
    updateStore(listings) {
        console.info('INFO', 'all listings updated');
        localStorage.setItem('listings', JSON.stringify(listings));
        this.listings = listings;
        return this.listings
    }

    /**
     * @desc send an API request to create an new listing
     * @param listingData
     * @return {*}
     */
    create(listingData) {
        console.info('INFO', 'creating a new listing...');
        return request.post(listingsEndpoint)
            .set('Content-Type', 'application/json')
            .send(listingData)
            .then(res => this.getListings(res.body.userId))
    }

    /**
     * @desc send request to update listing information
     * @param propertyData: object
     * @return {promise}
     */
    update(listingData) {
        console.info('INFO', 'sending list update request...');
        return request.put(listingsEndpoint)
            .set('Content-Type', 'application/json')
            .send(listingData)
            .then((res) => this.getListings(res.body.userId))
    }

    /**
     * @desc send request to delete a listing
     * @param listingId
     * @return {*}
     */
    delete(listingId) {
        console.info('INFO', 'sending list update request...');
        return request.delete(listingsEndpoint + `/${listingId}`)
            .set('Content-Type', 'application/json')
            .then((res) => this.getListings(res.body.userId))
    }
}

export const propertyListingService = new PropertyListingService();
