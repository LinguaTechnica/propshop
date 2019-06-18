import request from 'superagent';
import { propertiesEndpoint} from "../config";

/**
 * Property Service
 * @desc manages data storage of properties which can be accessed by any
 * component with access to localStorage
 */
export class PropertyService {
    constructor() {
        if (!localStorage.getItem('properties')) {
            localStorage.setItem('properties', JSON.stringify([]));
        }
        this.properties = JSON.parse(localStorage.getItem('properties'));

        this.get = this.get.bind(this);
        this.all = this.all.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.getProperties = this.getProperties.bind(this);
        this.updateStore = this.updateStore.bind(this);
    }

    /**
     * @desc fetch a property from storage
     * @return {object}
     */
    get(propId) {
        return this.properties.filter(prop => prop.id === propId)[0]
    }

    /**
     * @desc fetch properties from storage
     * @return {promise}
     */
    all() {
        return this.properties
    }

    /**
     * @desc send API request for all properties
     * @param userId: number, id of the owner
     * @return {promise}
     * TODO: Eventually need this to search by user_id
     */
    getProperties(userId) {
        return request.get(propertiesEndpoint)
            .set('Content-Type', 'application/json')
            .then((res) => this.updateStore(res.body))
    }

    /**
     * @desc update localStorage with most recent property data from API
     * @param properties
     * @return {object}
     */
    updateStore(properties) {
        console.info('INFO', 'all properties updated')
        localStorage.setItem('properties', JSON.stringify(properties));
        this.properties = properties;
        return this.properties
    }

    /**
     * @desc send an API request to create an new property
     * @param propertyData
     * @return {*}
     */
    create(propertyData) {
        console.info('INFO', 'creating a new property...');
        return request.post(propertiesEndpoint)
            .set('Content-Type', 'application/json')
            .send(propertyData)
            .then(res => this.getProperties(res.body))
    }

    /**
     * @desc send request to update property information
     * @param propertyData: object
     * @return {promise}
     */
    update(propertyData) {
        console.info('INFO', 'sending update request...');
        return request.put(propertiesEndpoint)
            .set('Content-Type', 'application/json')
            .send(propertyData)
            .then((res) => this.updateStore(res.body))
    }

    /**
     * @desc send request to delete a property
     * @param propertyId
     * @return {*}
     */
    delete(propertyId) {
        console.info('INFO', 'sending list update request...');
        return request.delete(propertiesEndpoint + `/${propertyId}`)
            .set('Content-Type', 'application/json')
            .then((res) => this.getProperties(res.body.userId))
    }
}

export const propertyService = new PropertyService();
