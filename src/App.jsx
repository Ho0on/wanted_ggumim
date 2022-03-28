import React from 'react';

import * as S from './App.style';
import SpaceProductView from './components/SpaceProductView/SpaceProductView';
import { TAG_ITEM } from './constants';

const App = () => {
  return (
    <S.Container>
      <S.ProductHeader>
        <S.RegisterDate>2022.01.12 17:55</S.RegisterDate>
        <S.ProductTitle>
          화이트, 우드, 라탄! 세가지 컨셉으로 꾸민 내 방
        </S.ProductTitle>
        <S.ProductTagList>
          {TAG_ITEM.map((el, idx) => {
            return <S.ProductTagItem key={idx}>{el}</S.ProductTagItem>;
          })}
        </S.ProductTagList>
      </S.ProductHeader>
      <SpaceProductView />
    </S.Container>
  );
};

export default App;
