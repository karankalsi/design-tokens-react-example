import { cardCaptionColor, cardTitleColor, dimen240, screenBgColor } from "../tokens";

const container = `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${screenBgColor}
`;

const cardCaptionScrollContainerStyle = `
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const cardActionContainerStyle = `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${dimen240};
`;

const cardTitleContainerStyle = `
color: ${cardTitleColor};
font-weight: bold;
font-family: 'sans-serif';
`;

const cardCaptionContainerStyle = `
  text-align: justify;
  margin-top: ${dimen240};
  color: ${cardCaptionColor};
  font-family: 'sans-serif';
`;

export default {
  container,
  cardCaptionScrollContainerStyle,
  cardActionContainerStyle,
  cardTitleContainerStyle,
  cardCaptionContainerStyle,
};
