import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

export default class PlacePoint extends Component {

    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className = 'google_place_point'>
                <div className='pin bounce'></div>
                <div className='pulse'></div>
            </div>
        );
    }
}