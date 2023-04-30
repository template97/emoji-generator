import Box from './Box';
import { Options } from './types';

interface Props extends Options {
  setText: (value: string) => void;
}

function WriteBox({ text, setText }: Props) {
  return (
    <Box>
      <textarea value={text} onChange={(e) => setText(e.target.value)} autoFocus />
    </Box>
  );
}

export default WriteBox;
