import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${({theme}) => theme.spacing.m}px;
  background-color: ${({theme}) => theme.colors.background};
`;
