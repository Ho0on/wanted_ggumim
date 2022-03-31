import React from 'react';

import * as S from './ThumbnailItem.style';

const ThumbnailItem = ({ item, isSelected, setSelectedItem }) => {
  const handleToggleItem = () => {
    setSelectedItem(isSelected ? null : item.productId);
  };

  return (
    <S.ListItem visible={isSelected} onClick={handleToggleItem}>
      <S.ItemThumbnail src={item.imageUrl} active={isSelected}>
        <S.DiscountLabel visible={item.discountRate > 0}>
          {item.discountRate}%
        </S.DiscountLabel>
      </S.ItemThumbnail>
    </S.ListItem>
  );
};

export default ThumbnailItem;
