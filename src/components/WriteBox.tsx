import { Options } from './types';

interface Props extends Options {
  setText: (value: string) => void;
}

function WriteBox({ text, setText }: Props) {
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default WriteBox;
