import { forwardRef } from 'react';
import Box from './Box';
import { Options } from './types';
import styled from 'styled-components';

interface Props extends Options {
  cssText: string;
}

const DivWithCssStyle = styled(Box.div)<{ css: string }>`
  ${(props) => props.css}
`;

const PreviewBox = forwardRef<HTMLDivElement, Props>(({ cssText: css, text }, ref) => {
  return (
    <Box.container>
      <Box.title>Preview</Box.title>
      <Box>
        <DivWithCssStyle ref={ref} className="preview" css={css}>
          {text}
        </DivWithCssStyle>
      </Box>
    </Box.container>
  );
});

export default PreviewBox;
