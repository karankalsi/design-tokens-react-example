import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import { tnc, tnc_header } from './contants';
import AppStyles from './App.styles';

const AppContainer = styled.div`
  ${AppStyles.container}
`;

const CardCaptionScrollContainer = styled.div`
  ${AppStyles.cardCaptionScrollContainerStyle}
`;

const CardActionContainer = styled.div`
  ${AppStyles.cardActionContainerStyle}
`;

const CardTitleContainer = styled.div`
  ${AppStyles.cardTitleContainerStyle}
`;

const CardCaptionContainer = styled.div`
  ${AppStyles.cardCaptionContainerStyle}
`;

export function App() {
  return (
    <AppContainer>
      <Card>
        <CardTitleContainer>{tnc_header}</CardTitleContainer>
        <CardCaptionScrollContainer>
          <CardCaptionContainer>{tnc}</CardCaptionContainer>
        </CardCaptionScrollContainer>
        <CardActionContainer>
          <Button.Negative title={'Decline'} />
          <Button.Primary title={'Accept'} />
        </CardActionContainer>
      </Card>
    </AppContainer>
  );
}

export default App;
