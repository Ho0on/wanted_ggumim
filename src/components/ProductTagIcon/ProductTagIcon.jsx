import React from 'react';
import { ARROW_ICON, CLOSE_ICON, SEARCH_ICON } from '../../constants';

import * as S from './ProductTagIcon.style';

const ProductTagIcon = ({
  item,
  isSelected,
  handleSelectItem,
  onTop,
  onRight,
}) => {
  const isOutside = item.outside;

  const handleToggleToolTip = () => {
    handleSelectItem(isSelected ? null : item.productId);
  };

  return (
    <S.TagIcon pointX={item.pointX} pointY={item.pointY}>
      <S.SearchIcon
        src={!isSelected ? SEARCH_ICON : CLOSE_ICON}
        onClick={handleToggleToolTip}
      />
      {isSelected && (
        <S.ToolTip onTop={onTop} onRight={onRight}>
          <S.ToolTipImg src={item.imageUrl} />
          <S.ToolTipDesc>
            <S.DescTitle>{item.productName}</S.DescTitle>
            <S.DescPrice>
              {isOutside ? (
                <S.PriceLabel>예상가</S.PriceLabel>
              ) : (
                <S.PriceDiscountLabel>
                  {item.discountRate}%
                </S.PriceDiscountLabel>
              )}
              <S.Price>{item.priceDiscount.toLocaleString()}</S.Price>
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

export default ProductTagIcon;
