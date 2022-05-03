import React from 'react';
import { useDispatch } from 'react-redux';
import { selectItem } from '../../redux/actions/toolTip';

import * as S from './ThumbnailItem.style';

const ThumbnailItem = ({ item, isSelected }) => {
  const { productId, imageUrl, discountRate } = item;
  const dispatch = useDispatch();

  const handleToggleItem = () => {
    dispatch(selectItem(isSelected ? null : productId));
  };

  return (
    <S.ListItem visible={isSelected} onClick={handleToggleItem}>
      <S.ItemThumbnail src={imageUrl} active={isSelected}>
        <S.DiscountLabel visible={discountRate > 0}>
          {discountRate}%
        </S.DiscountLabel>
      </S.ItemThumbnail>
    </S.ListItem>
  );
};

export default ThumbnailItem;
