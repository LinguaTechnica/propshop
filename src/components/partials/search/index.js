import React from 'react'

/**
 * Search Form
 *  @desc search property listings
 *  @type function(*): * functional component
 *  @param props
 *  - Props as args
 *  - No internal state
 *  - No lifecycle methods
 *
 */

export const SearchForm = (props) => {

    /**
     * @desc handles a query on submit
     * @param e
     * @return {*}
     */
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        return props.search(query);
    };

    /**
     * @desc changes the results displayed as the user types
     * @param e
     * @return {*}
     */
    const handleChange = (e) => {
        e.preventDefault();
        if (!e.target.value) { props.reset() }
        const query = e.target.value;
        return props.change(query);
    };

    return (
        <form onChange={ handleChange }>
            <div className="form-group">
                <input className="form-control" name="query" placeholder="Search" type="text"/>
            </div>
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
    )
};

