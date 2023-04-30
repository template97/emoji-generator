import { forwardRef } from 'react';
import Box from './Box';
import { Options } from './types';

// interface Props extends Options {

// }

const PreviewBox = forwardRef<HTMLDivElement, Options>(({ text }, ref) => {
  return (
    <Box>
      <div ref={ref} className="preview">
        {text}
      </div>
    </Box>
  );
});

export default PreviewBox;
