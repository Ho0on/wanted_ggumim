import styled from 'styled-components';

export const TagIcon = styled.div`
  position: absolute;
  left: ${props => props.pointY * 1.65}px;
  top: ${props => props.pointX * 1.6}px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 100%;
`;

export const ToolTip = styled.div`
  position: absolute;
  top: 28px;
  left: -24px;
  display: flex;
  align-items: center;
  width: 220px;
  font-size: 14px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
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
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const ToolTipDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: left;
`;

export const DescTitle = styled.div`
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  white-space: initial;
`;

export const DescPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const PriceLabel = styled.span`
  color: #898f94;
  font-size: 13px;
  margin-right: 4px;
`;

export const PriceDiscountLabel = styled.span`
  color: #ff585d;
  font-size: 16px;
  font-weight: bold;
  margin-right: 4px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

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
