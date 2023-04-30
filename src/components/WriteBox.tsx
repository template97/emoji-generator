import Box from './Box';
import { Options } from './types';

interface Props extends Options {
  setText: (value: string) => void;
}

function WriteBox({ text, setText }: Props) {
  return (
    <Box.container>
      <Box.title>Input</Box.title>
      <Box>
        <Box.textarea value={text} onChange={(e) => setText(e.target.value)} autoFocus />
      </Box>
    </Box.container>
  );
}

export default WriteBox;
