import React, { useState } from 'react';

import * as S from './ProductTagIcon.style';

const ProductTagIcon = ({ data }) => {
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);
  // console.log(data.productId);

  const isOutside = data.outside;

  const handleOpenToolTip = id => {
    const isCorrect = id === data.productId;
    console.log(isCorrect);
    setIsOpenToolTip(prev => !prev);
  };
  return (
    <S.TagIcon pointX={data.pointX} pointY={data.pointY} key={data.productId}>
      <S.SearchIcon
        src={
          !isOpenToolTip
            ? 'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
            : 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
        }
        onClick={() => handleOpenToolTip(data.productId)}
      />
      <S.ToolTip visible={isOpenToolTip}>
        <S.ToolTipImg src={data.imageUrl} />
        <S.ToolTipDesc>
          <S.DescTitle>{data.productName}</S.DescTitle>
          <S.DescPrice>
            {isOutside ? (
              <S.PriceLabel>예상가</S.PriceLabel>
            ) : (
              <S.PriceDiscountLabel>{data.discountRate}%</S.PriceDiscountLabel>
            )}
            <S.Price>{data.priceDiscount.toLocaleString()}</S.Price>
          </S.DescPrice>
        </S.ToolTipDesc>
        <S.ToolTipArrow>
          <S.ToolTipArrowImg src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png" />
        </S.ToolTipArrow>
      </S.ToolTip>
    </S.TagIcon>
  );
};

export default ProductTagIcon;
