import React from 'react';

import ThumbnailItem from './ThumbnailItem';
import * as S from './ProductThumbnailList.style';

const ProductThumbnailList = ({ itemList, selectedItem, handleSelectItem }) => {
  return (
    <S.ThumbnailListWrap>
      <S.ThumbnailList>
        {itemList.map(item => {
          return (
            <ThumbnailItem
              key={item.productId}
              item={item}
              isSelected={item.productId === selectedItem}
              handleSelectItem={handleSelectItem}
            />
          );
        })}
      </S.ThumbnailList>
    </S.ThumbnailListWrap>
  );
};

export default ProductThumbnailList;
