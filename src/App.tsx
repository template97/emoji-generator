import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import PreviewBox from './components/PreviewBox';
import WriteBox from './components/WriteBox';
import CssBox from './components/CssBox';

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
  const [cssText, setCssText] = useState<string>('');
  const targetRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div id="card">
        <BoxWrapper>
          <WriteBox text={text} setText={setText} />
          <PreviewBox text={text} cssText={cssText} ref={targetRef} />
          <CssBox cssText={cssText} setCssText={setCssText} />
        </BoxWrapper>
        <button onClick={() => downloadImage()}>Generate</button>
      </div>
    </>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default App;
