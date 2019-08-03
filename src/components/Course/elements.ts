import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: #34495e;
  padding: 15px;
  display: flex;
  display:flex;
  align-items: center;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkIconWrapper = styled(Link)`
  padding: 5px;
  color: #fff;
  font-size: 18px;
`;

export const IconWrapper = styled.div`
  padding: 5px;
  font-size: 18px;
`;

const getStatusColor = (completed: boolean, current: boolean) => {
  if (current) {
    return '#fabd2f';
  }
  if (completed) {
    return '#1abc9c';
  }
  return '#7f8c8d';
}

export const Dot = styled.div<{
  current: boolean;
  completed: boolean;
}>`
  background: ${({completed, current}) => getStatusColor(completed, current)};
  margin: 0 10px;
  height: ${({current}) => current ? 10 : 6}px;
  width: ${({current}) => current ? 10 : 6}px;
`;
