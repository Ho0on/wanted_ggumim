import React from 'react';

import * as S from './ProductTagIcon.style';

const SEARCH_ICON =
  'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png';
const CLOSE_ICON =
  'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png';

const ProductTagIcon = ({ item, isSelected, handleSelectItem }) => {
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
        <S.ToolTip>
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
            <S.ToolTipArrowImg src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png" />
          </S.ToolTipArrow>
        </S.ToolTip>
      )}
    </S.TagIcon>
  );
};

export default ProductTagIcon;
