import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductThumbnailList from '../ProductThumbnailList/ProductThumbnailList';
import ProductTagIcon from '../ProductTagIcon/ProductTagIcon';
import * as S from './SpaceProductView.style';

const SpaceProductView = () => {
  const [productData, setProductData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => setProductData(res.data))
      .catch(error => {
        throw Error(error);
      });
  }, []);

  const handleSelectItem = item => {
    setSelectedItem(item);
  };

  return (
    <>
      <S.SpaceViewContainer>
        {productData && (
          <>
            <S.SpaceImg
              src={productData.imageUrl}
              onClick={() => setSelectedItem(null)}
            />
            {productData.productList.map(item => (
              <ProductTagIcon
                key={item.productId}
                item={item}
                isSelected={item.productId === selectedItem}
                handleSelectItem={handleSelectItem}
              />
            ))}
            <ProductThumbnailList
              itemList={productData.productList}
              selectedItem={selectedItem}
              handleSelectItem={handleSelectItem}
            />
          </>
        )}
      </S.SpaceViewContainer>
    </>
  );
};

export default SpaceProductView;
