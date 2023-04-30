import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;

  background-color: gray;

  > div,
  > textarea {
    width: calc(100% - 8px);
    height: calc(100% - 8px);

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
  }
`;

export default Box;
