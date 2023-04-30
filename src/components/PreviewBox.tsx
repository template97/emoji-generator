import { Options } from './types';

// interface Props extends Options {}

function PreviewBox({ text }: Options) {
  return <div>{text}</div>;
}

export default PreviewBox;
