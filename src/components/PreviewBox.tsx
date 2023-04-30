import { forwardRef } from 'react';
import { Options } from './types';

// interface Props extends Options {

// }

const PreviewBox = forwardRef<HTMLDivElement, Options>(({ text }, ref) => {
  return <div ref={ref}>{text}</div>;
});

export default PreviewBox;
