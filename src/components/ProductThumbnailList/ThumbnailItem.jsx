import React from 'react';

import * as S from './ThumbnailItem.style';

const ThumbnailItem = ({ item, isSelected, setSelectedItem }) => {
  const handleSelectThumbnail = () => {
    setSelectedItem(isSelected ? null : item.productId);
  };

  return (
    <S.ListItem visible={isSelected} onClick={handleSelectThumbnail}>
      <S.ItemThumbnail src={item.imageUrl} active={isSelected}>
        <S.DiscountLabel visible={item.discountRate > 0}>
          {item.discountRate}%
        </S.DiscountLabel>
      </S.ItemThumbnail>
    </S.ListItem>
  );
};

export default ThumbnailItem;
