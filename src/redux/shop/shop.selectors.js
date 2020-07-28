import {createSelector} from 'reselect';



const selectShop =state=>state.shop;
export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ?Object.keys(collections).map(key => collections[key]): []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
collections => (collections ? collections[collectionUrlParam] : null)    );

export const selectIsCollectionFetching = createSelector(
     [selectShop],
     shop=>shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop=> !!shop.collections //converting to boolean value false that 
    //indicates our collection is not yet loaded before it mounts on componentwill mount
)