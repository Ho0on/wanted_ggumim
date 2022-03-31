import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import ProductThumbnailList from '../ProductThumbnailList/ProductThumbnailList';
import ProductToolTip from '../ProductToolTip/ProductToolTip';
import * as S from './SpaceProductView.style';
import { API_ADDRESS } from '../../constants';

const SpaceProductView = () => {
  const [productData, setProductData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef();

  const imageSizeLoad = () => {
    setImageSize({
      width: imageRef.current.offsetWidth,
      height: imageRef.current.offsetHeight,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_ADDRESS);
      setProductData(result.data);
      imageSizeLoad();
    };
    fetchData();
  }, []);

  return (
    <S.SpaceViewContainer>
      {productData && (
        <>
          <S.SpaceImg
            src={productData.imageUrl}
            onClick={() => setSelectedItem(null)}
            ref={imageRef}
          />
          {productData.productList.map(item => (
            <ProductToolTip
              key={item.productId}
              item={item}
              setSelectedItem={setSelectedItem}
              isSelected={item.productId === selectedItem}
              onTop={item.pointX * 1.6 > imageSize.height / 2}
              onRight={item.pointY * 1.65 > imageSize.width / 2}
            />
          ))}
          <ProductThumbnailList
            itemList={productData.productList}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </>
      )}
    </S.SpaceViewContainer>
  );
};

export default SpaceProductView;
