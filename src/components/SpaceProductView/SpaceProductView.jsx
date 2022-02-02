import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './SpaceProductView.style';
import ProductThumbnailList from '../ProductThumbnailList';
import ProductTagIcon from '../ProductTagIcon/ProductTagIcon';

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
            {productData.productList.map((el, idx) => (
              <ProductTagIcon data={el} />
            ))}
          </>
        )}
      </S.SpaceViewContainer>
      <S.ThumbnailListWrap>
        <S.ThumbnailList>
          {productData &&
            productData.productList.map(el => {
              const labelVisible = el.discountRate > 0;
              return (
                <S.ListItem key={el.productId} visible={labelVisible}>
                  <S.ItemThumbnail src={el.imageUrl} visible={labelVisible}>
                    <S.DiscountLabel visible={labelVisible}>
                      {el.discountRate}%
                    </S.DiscountLabel>
                  </S.ItemThumbnail>
                </S.ListItem>
              );
            })}
        </S.ThumbnailList>
      </S.ThumbnailListWrap>
    </>
  );
};

export default SpaceProductView;
