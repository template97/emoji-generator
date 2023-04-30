import html2canvas from 'html2canvas';
import './App.css';
import { useRef, useState } from 'react';
import WriteBox from './components/WriteBox';
import PreviewBox from './components/PreviewBox';

function App() {
  const onSaveAs = (uri: string, fileName: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  };

  const downloadImage = async () => {
    const container = targetRef.current;
    if (!container) {
      alert('Unexpected error');
      return;
    }

    const canvas = await html2canvas(container);
    onSaveAs(canvas.toDataURL('image/png'), 'result.png');
  };

  const [text, setText] = useState<string>('');
  const targetRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div id="card">
        <WriteBox text={text} setText={setText} />
        <PreviewBox text={text} ref={targetRef} />
        <button onClick={() => downloadImage()}>Generate</button>
      </div>
    </>
  );
}

export default App;
