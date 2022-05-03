import React from 'react';
import { useDispatch } from 'react-redux';
import { ARROW_ICON, CLOSE_ICON, SEARCH_ICON } from '../../constants';
import { selectItem } from '../../redux/actions/toolTip';

import * as S from './ProductToolTip.style';

const ProductToolTip = ({ item, isSelected, onTop, onRight }) => {
  const {
    outside,
    productId,
    pointX,
    pointY,
    imageUrl,
    productName,
    discountRate,
    priceDiscount,
  } = item;
  const dispatch = useDispatch();

  const handleToggleToolTip = () => {
    dispatch(selectItem(isSelected ? null : productId));
  };

  return (
    <S.TagIcon pointX={pointX} pointY={pointY}>
      <S.SearchIcon
        src={isSelected ? CLOSE_ICON : SEARCH_ICON}
        onClick={handleToggleToolTip}
      />
      {isSelected && (
        <S.ToolTip onTop={onTop} onRight={onRight}>
          <S.ToolTipImg src={imageUrl} />
          <S.ToolTipDesc>
            <S.DescTitle>{productName}</S.DescTitle>
            <S.DescPrice>
              {outside ? (
                <S.PriceLabel>예상가</S.PriceLabel>
              ) : (
                <S.PriceDiscountLabel>{discountRate}%</S.PriceDiscountLabel>
              )}
              <S.Price>{priceDiscount.toLocaleString()}</S.Price>
            </S.DescPrice>
          </S.ToolTipDesc>
          <S.ToolTipArrow>
            <S.ToolTipArrowImg src={ARROW_ICON} />
          </S.ToolTipArrow>
        </S.ToolTip>
      )}
    </S.TagIcon>
  );
};

export default ProductToolTip;
