import React from 'react';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview =({collection})=>{
    
    return(
   <div className='colections-overview'>
         {
                collection.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
   </div>
    );
};


const mapStateToProps=createStructuredSelector({
    collection:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);