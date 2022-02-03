import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import ProductThumbnailList from '../ProductThumbnailList/ProductThumbnailList';
import ProductTagIcon from '../ProductTagIcon/ProductTagIcon';
import * as S from './SpaceProductView.style';

const SpaceProductView = () => {
  const [productData, setProductData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef();

  useEffect(() => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => {
        setProductData(res.data);
        imageSizeLoad();
      })
      .catch(error => {
        throw Error(error);
      });
  }, []);

  const imageSizeLoad = () => {
    setImageSize({
      width: imageRef.current.offsetWidth,
      height: imageRef.current.offsetHeight,
    });
  };

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
              ref={imageRef}
            />
            {productData.productList.map(item => (
              <ProductTagIcon
                key={item.productId}
                item={item}
                isSelected={item.productId === selectedItem}
                handleSelectItem={handleSelectItem}
                onTop={item.pointX * 1.6 > imageSize.height / 2}
                onRight={item.pointY * 1.65 > imageSize.width / 2}
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
