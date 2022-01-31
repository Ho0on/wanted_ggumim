import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 60px 0px;
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterDate = styled.span`
  padding-bottom: 16px;
  font-size: 12px;
  font-weight: 100;
  color: #646464;
`;

export const ProductTitle = styled.h1`
  padding-bottom: 16px;
  font-size: 30px;
  font-weight: 700;
`;

export const ProductTagList = styled.ul`
  display: flex;
  padding-bottom: 16px;
`;

export const ProductTagItem = styled.li`
  margin-right: 12px;
  color: #646464;
`;
