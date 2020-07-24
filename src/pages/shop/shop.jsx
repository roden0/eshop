import React from 'react';

import data from '../../shopdata.js';

import CollectionPreview from '../../components/collection-preview/collectionPreview';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: data
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <section className="shop-page page">
                {
                    collections.map(({id, ...otherProps})=>(
                        <CollectionPreview key={id} {...otherProps} />       
                    ))
                }
            </section>
        )
    }
}

export default ShopPage;
