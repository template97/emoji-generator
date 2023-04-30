import styled from 'styled-components';
import Box from './Box';

interface Props {
  cssText: string;
  setCssText: (value: string) => void;
}

function CssBox({ cssText, setCssText }: Props) {
  return (
    <Box.container>
      <Box.title>CSS Style</Box.title>
      <Box>
        <Decorator>{`div {`}</Decorator>
        <CssTextarea className="css-box" value={cssText} onChange={(e) => setCssText(e.target.value)} />
        <Decorator>{`}`}</Decorator>
      </Box>
    </Box.container>
  );
}
const Decorator = styled.div`
  text-align: left;
  color: white;
  padding: 4px 8px;
`;

const CssTextarea = styled.textarea`
  width: 200px;
  height: 400px;

  margin: 0;
  padding: 0 0 0 16px;

  box-sizing: border-box;
  border: none;

  background-color: gray;
  color: white;

  font-family: serif;
  font-size: 16px;
  font-weight: 400;

  resize: none;
  outline: none;
`;
export default CssBox;
