import styled from 'styled-components';

export const SpaceViewContainer = styled.div`
  position: relative;
  width: 800px;
`;

export const SpaceImg = styled.img`
  width: 100%;
`;

export const ThumbnailListWrap = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

export const ThumbnailList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin: 26px 6px;
  padding: 2px;

  ${props =>
    props.visible &&
    `border-radius: 18px;
    background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
    `};
`;

export const ItemThumbnail = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 1px solid ${props => (props.visible ? 'white' : '#aaafb9')};
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DiscountLabel = styled.span`
  display: ${props => (props.visible ? null : 'none')};
  position: absolute;
  top: 0;
  right: 4px;
  width: 24px;
  height: 28px;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  padding-left: 2px;
  background-image: url('https://cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
