import styled from 'styled-components';

export const ThumbnailListWrap = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ThumbnailList = styled.ul`
  display: flex;
`;
