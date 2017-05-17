import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        activeNavItem: PropTypes.any.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    getChildActiveProp = (child) => {
        if (child.props.active) {
            return true;
        }
        if (child.props.navItemKey === this.props.activeNavItem) {
            return true;
        }
        return child.props.active;
    };

    render() {
        return (
            <nav>
                <ul>
                    {
                        this.props.children.map((child) => {
                            return cloneElement(
                                child,
                                {
                                    active: this.getChildActiveProp(child),
                                    onItemClick: this.props.onSelect,
                                    key: child.props.navItemKey
                                }
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }
};