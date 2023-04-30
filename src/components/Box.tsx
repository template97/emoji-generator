import styled, { css } from 'styled-components';

const _Box = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  background-color: gray;
`;

const BoxWrapper = styled.div`
  ${``}
`;
const BoxContextStyle = css`
  width: 200px;
  height: 200px;

  margin: 4px;
  padding: 0;

  box-sizing: border-box;
  border: none;

  background-color: white;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 40px;
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
  word-break: break-all;

  resize: none;
  outline: none;
`;

const BoxTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const Box = Object.assign(_Box, {
  title: BoxTitle,
  container: BoxWrapper,
  div: styled.div`
    ${BoxContextStyle}
    overflow: hidden;
  `,
  textarea: styled.textarea`
    ${BoxContextStyle}
  `,
});

export default Box;
