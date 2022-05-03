import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import ProductThumbnailList from '../ProductThumbnailList/ProductThumbnailList';
import ProductToolTip from '../ProductToolTip/ProductToolTip';
import * as S from './SpaceProductView.style';
import { API_ADDRESS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from '../../redux/actions/toolTip';

const SpaceProductView = () => {
  const [productData, setProductData] = useState();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.toolTip);

  const imageRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_ADDRESS);
      setProductData(result.data);
      setImageSize({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    };
    fetchData();
  }, []);

  return (
    <S.SpaceViewContainer>
      {productData && (
        <>
          <S.SpaceImg
            src={productData.imageUrl}
            onClick={() => dispatch(selectItem(null))}
            ref={imageRef}
          />
          {productData.productList.map(item => (
            <ProductToolTip
              key={item.productId}
              item={item}
              isSelected={item.productId === selectedItem}
              onTop={item.pointX * 1.6 > imageSize.height / 2}
              onRight={item.pointY * 1.65 > imageSize.width / 2}
            />
          ))}
          <ProductThumbnailList itemList={productData.productList} />
        </>
      )}
    </S.SpaceViewContainer>
  );
};

export default SpaceProductView;
