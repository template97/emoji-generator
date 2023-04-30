import { forwardRef } from 'react';
import Box from './Box';
import { Options } from './types';
import styled from 'styled-components';

interface Props extends Options {
  cssText: string;
}

const TextAreaWithCssStyle = styled(Box.div)<{ css: string }>`
  ${(props) => props.css}
`;

const PreviewBox = forwardRef<HTMLDivElement, Props>(({ cssText: css, text }, ref) => {
  return (
    <Box>
      <Box.title>Preview</Box.title>
      <TextAreaWithCssStyle ref={ref} className="preview" css={css}>
        {text}
      </TextAreaWithCssStyle>
    </Box>
  );
});

export default PreviewBox;
