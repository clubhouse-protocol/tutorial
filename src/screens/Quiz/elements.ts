import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
  padding: 0 50px;

  p code {
    color: #fabd2f;
  }

  a {
    color: #9b59b6;
  }
`;

export const ErrorWrapper = styled.div`
  color: #e74c3c;
  text-align: center;
`;

export const RightWrapper = styled.div<{
  disabled: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: all .4s;
  opacity: ${props => props.disabled ? .2 : 1};
`;

export const EditorWrapper = styled.div`
  flex: 1 0 0;
  overflow-y: auto;
  padding-top: 50px
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;
