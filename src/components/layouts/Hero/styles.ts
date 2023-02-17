import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  h1 {
    font-size: 4.4rem;
    line-height: 5.2rem;
    background: var(--color-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    max-width: 80rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #8f9bb7;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;
