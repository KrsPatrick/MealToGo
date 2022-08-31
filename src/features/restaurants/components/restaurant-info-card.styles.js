import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const CardStyle = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
