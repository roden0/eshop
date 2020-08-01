import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

import { CustomButton } from  '../custom-button/custom-button';

import './collectionItem.scss';

const CollectionItem = ({item, addItem}) => {
    const {name,price,imageUrl} = item;

    return(
    <li className="collection-item">
        <figure load="lazy"
        style={{backgroundImage:`url(${imageUrl})`}}
        className="image">
        </figure>
        <footer className="collection-footer">
            <span className="name">
                {name}
            </span>
            <span className="price">
                {price}
            </span>
        </footer>
        <CustomButton inverted onClick={()=>{addItem(item)}}>
            Add to cart
        </CustomButton>
    </li>
)};

const mapDispatchToProps = dispatch => ({
 addItem: (item) => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);