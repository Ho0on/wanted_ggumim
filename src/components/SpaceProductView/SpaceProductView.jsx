import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './SpaceProductView.style';
import ProductThumbnailList from '../ProductThumbnailList';

const SpaceProductView = () => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => setProductData(res.data))
      .catch(error => {
        throw Error(error);
      });
  }, []);

  return (
    <>
      <S.SpaceViewContainer>
        {productData && (
          <>
            <S.SpaceImg src={productData.imageUrl} />
            <S.TagIcon>
              <S.SearchIcon src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png" />
              <S.CloseIcon src="https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png" />
              <S.ToolTip>
                <S.ToolTipImg />
                <S.ToolTipDesc>
                  <S.DescTitle>
                    라트 세스카 암체어(Cesca Chair) 라탄체어 카페의자
                  </S.DescTitle>
                  <S.DescPrice>dodo</S.DescPrice>
                </S.ToolTipDesc>
                <S.ToolTipArrow>
                  <S.ToolTipArrowImg src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png" />
                </S.ToolTipArrow>
              </S.ToolTip>
            </S.TagIcon>
          </>
        )}
      </S.SpaceViewContainer>
      <ProductThumbnailList />
    </>
  );
};

export default SpaceProductView;
