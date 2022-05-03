import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import ThumbnailItem from './ThumbnailItem';
import * as S from './ProductThumbnailList.style';

const ProductThumbnailList = ({ itemList }) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const selectedItem = useSelector(state => state.toolTip);

  const listWrap = useRef();

  const onDragStart = e => {
    e.preventDefault();

    setIsDrag(true);
    setStartX(e.pageX + listWrap.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = e => {
    listWrap.current.scrollLeft = startX - e.pageX;
  };

  return (
    <S.ThumbnailListWrap
      ref={listWrap}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={isDrag ? onDragMove : null}
    >
      <S.ThumbnailList>
        {itemList.map(item => {
          return (
            <ThumbnailItem
              key={item.productId}
              item={item}
              isSelected={item.productId === selectedItem}
            />
          );
        })}
      </S.ThumbnailList>
    </S.ThumbnailListWrap>
  );
};

export default ProductThumbnailList;
