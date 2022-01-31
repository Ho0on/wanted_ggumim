import styled from 'styled-components';

export const SpaceViewContainer = styled.div`
  position: relative;
  width: 800px;
`;

export const SpaceImg = styled.img`
  width: 100%;
`;

export const TagIcon = styled.div`
  position: absolute;
  top: 0;
  width: 32px;
  height: 32px;
  border: 1px solid red;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 100%;
`;

export const CloseIcon = styled.img`
  width: 100%;
`;

export const ToolTip = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url('https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

export const ToolTipImg = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 8px;
  border-radius: 4px;
  background-image: url('https://cdn.ggumim.co.kr/cache/furniture/300/20210705191444bnwLPTWxV0.jpg');
  background-size: cover;
  background-position: center;
`;

export const ToolTipDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

export const DescTitle = styled.div`
  width: 100%;
  color: #333c45;
`;

export const DescPrice = styled.div``;

export const ToolTipArrow = styled.div`
  display: flex;
  align-items: flex-end;
  width: 20px;
  height: 20px;
  margin-top: auto;
  margin-right: 2px;
`;

export const ToolTipArrowImg = styled.img`
  width: 100%;
`;
