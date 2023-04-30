import html2canvas from 'html2canvas';
import './App.css';

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
    const container = document.getElementById('card');
    if (!container) {
      alert('Unexpected error');
      return;
    }

    const canvas = await html2canvas(container);
    onSaveAs(canvas.toDataURL('image/png'), 'result.png');
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div id="card">
        <button onClick={() => downloadImage()}>count is</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
