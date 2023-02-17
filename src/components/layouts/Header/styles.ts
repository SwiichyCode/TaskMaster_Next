import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  height: 9.6rem;
  border-bottom: 1px solid #151934;
  padding: 0 2.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 122.4rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  width: 14.7rem;
`;
