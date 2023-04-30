import { forwardRef } from 'react';
import Box from './Box';
import { Options } from './types';

// interface Props extends Options {

// }

const PreviewBox = forwardRef<HTMLDivElement, Options>(({ text }, ref) => {
  return (
    <Box>
      <Box.title>Preview</Box.title>
      <Box.div ref={ref} className="preview">
        {text}
      </Box.div>
    </Box>
  );
});

export default PreviewBox;
