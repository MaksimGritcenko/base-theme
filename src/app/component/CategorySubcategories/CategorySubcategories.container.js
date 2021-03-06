/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { hideActiveOverlay } from 'Store/Overlay/Overlay.action';
import history from 'Util/History';

import CategorySubcategories from './CategorySubcategories.component';

export const mapDispatchToProps = (dispatch) => ({
    hideActiveOverlay: () => dispatch(hideActiveOverlay())
});

export class CategorySubcategoriesContainer extends PureComponent {
    static propTypes = {
        hideActiveOverlay: PropTypes.func.isRequired,
        option: PropTypes.shape({
            value_string: PropTypes.string,
            label: PropTypes.string
        }).isRequired
    };

    containerFunctions = {
        handleCategoryClick: this.handleCategoryClick.bind(this)
    };

    handleCategoryClick(e) {
        const { hideActiveOverlay, option } = this.props;
        const { value_string } = option;

        e.preventDefault();
        hideActiveOverlay();

        history.push({
            pathname: value_string,
            state: { isFromCategory: true, category: true },
            search: history.location.search
        });
    }

    render() {
        return (
            <CategorySubcategories
              { ...this.props }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(null, mapDispatchToProps)(CategorySubcategoriesContainer);
