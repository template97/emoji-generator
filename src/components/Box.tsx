import styled, { css } from 'styled-components';

const _Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: gray;
`;
const BoxContextStyle = css`
  width: 300px;
  height: 300px;

  margin: 4px;
  padding: 0;

  box-sizing: border-box;
  border: none;

  background-color: white;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  font-weight: 400;

  resize: none;
  outline: none;
`;

const BoxTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const Box = Object.assign(_Box, {
  title: BoxTitle,
  div: styled.div`
    ${BoxContextStyle}
  `,
  textarea: styled.textarea`
    ${BoxContextStyle}
  `,
});

export default Box;
