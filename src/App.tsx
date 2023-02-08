import './App.css';

type InputEvent = React.ChangeEvent<HTMLInputElement>

function App() {
  const handleFileChanges = (e: InputEvent) => {
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-sm-12'>
          <div className='display-2'>Lue-image-Editor</div>
          <canvas height={600} width={400} style={{backgroundColor: '#ddd', border: '2px solid blue'}}></canvas>
          <div>
            <input type="file" accept='image/*' onChange={handleFileChanges} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
