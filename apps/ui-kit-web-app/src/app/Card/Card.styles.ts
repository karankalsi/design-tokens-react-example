import { cardBgColor } from '../../tokens';

const container = `
  width: 360px;
  height: 380px;
  display: flex;
  flex-direction: column;
  background-color: ${cardBgColor};
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.22);
  border-radius: 24px;
  padding: 24px;
`;

export default {
  container,
};
