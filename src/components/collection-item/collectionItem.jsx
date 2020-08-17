import React, {useContext} from 'react';

import { CustomButton } from  '../custom-button/custom-button';

import { CartContext } from '../../providers/cart/cart-provider';

import './collectionItem.scss';

const CollectionItem = ({item}) => {
    const {addItem} = useContext(CartContext);

    const {name,price,imageUrl} = item;

    return(
    <li className="collection-item">
        <figure className="image">
            <img alt={name} load="lazy" src={imageUrl} />
            <CustomButton inverted onClick={()=>{addItem(item)}}>
                Add to cart
            </CustomButton>
        </figure>
        <footer className="collection-footer">
            <span className="name">
                {name}
            </span>
            <span className="price currency">
                {price}
            </span>
        </footer>
    </li>
)};


export default CollectionItem;