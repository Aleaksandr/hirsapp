import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        active: false
    };

    static propTypes = {
        itemText: PropTypes.any,
        active: PropTypes.bool,
        navItemKey: PropTypes.any,
        onItemClick: PropTypes.func
    };

    handleClick = (event) => {
        event.preventDefault();
        if (!this.props.active) {
            this.props.onItemClick({
                itemKey : this.props.navItemKey
            });
        }
    };

    render() {

        let itemClasses = classNames({
            'active': this.props.active
        });

        return (
            <li className={itemClasses} onClick={this.handleClick}>
                <div>
                    {this.props.itemText}
                </div>
            </li>
        );
    }
};