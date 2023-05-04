import styled from 'styled-components';
import {
  buttonSpacingHorizontal,
  buttonSpacingVertical,
  buttonBorderRadius,
  buttonPrimaryBgColor,
  buttonPrimaryTxtColor,
  buttonPrimaryBorder,
  buttonNegativeBgColor,
  buttonNegativeTxtColor,
  buttonNegativeBorder,
  buttonOutlineBgColor,
  buttonOutlineTxtColor,
  buttonOutlineBorder
} from '../tokens';

const StyledApp = styled.div`
  display: inline-block;
  flex-direction: column;
  margin: 24px;
`;

const baseButtonStyles = `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: ${buttonBorderRadius};
padding-left: ${buttonSpacingHorizontal};
padding-right: ${buttonSpacingHorizontal};
padding-top: ${buttonSpacingVertical};
padding-bottom: ${buttonSpacingVertical};
`;

const PrimaryButton = styled.a`
  ${baseButtonStyles}
  background-color: ${buttonPrimaryBgColor};
  border: ${buttonPrimaryBorder.width} ${buttonPrimaryBorder.style} ${buttonPrimaryBorder.color};
  color: ${buttonPrimaryTxtColor};
`;

const NegativeButton = styled.a`
  ${baseButtonStyles}
  background-color: ${buttonNegativeBgColor};
  border: ${buttonNegativeBorder.width} ${buttonNegativeBorder.style} ${buttonNegativeBorder.color};
  color: ${buttonNegativeTxtColor};
`;


const OutlineButton = styled.a`
  ${baseButtonStyles}
  background-color: ${buttonOutlineBgColor};
  border: ${buttonOutlineBorder.width} ${buttonOutlineBorder.style} ${buttonOutlineBorder.color};
  color: ${buttonOutlineTxtColor};
`;

export function App() {
  return (
    <StyledApp>
      <PrimaryButton>Button</PrimaryButton>
      <br />
      <br />
      <NegativeButton>Button</NegativeButton>
      <br />
      <br />
      <OutlineButton>Button</OutlineButton>
    </StyledApp>
  );
}

export default App;
