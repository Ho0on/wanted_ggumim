import React, { useRef, useState } from 'react';

import ThumbnailItem from './ThumbnailItem';
import * as S from './ProductThumbnailList.style';

const ProductThumbnailList = ({ itemList, selectedItem, handleSelectItem }) => {
  const listWrap = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + listWrap.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = e => {
    isDrag && (listWrap.current.scrollLeft = startX - e.pageX);
  };

  return (
    <S.ThumbnailListWrap
      ref={listWrap}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onDragMove}
      onMouseLeave={onDragEnd}
    >
      <S.ThumbnailList>
        {itemList.map(item => {
          return (
            <ThumbnailItem
              key={item.productId}
              item={item}
              isSelected={item.productId === selectedItem}
              handleSelectItem={handleSelectItem}
            />
          );
        })}
      </S.ThumbnailList>
    </S.ThumbnailListWrap>
  );
};

export default ProductThumbnailList;
