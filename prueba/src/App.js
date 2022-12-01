import logo from './logo.svg';
import './App.css';
import Encabezado from './components/layout';
import Entrada from './components/layout-entrada';
import Chexbox from './components/layout-chexbox';

function App() {
  return (
    <>
      <Encabezado/>
      <Entrada/> <br/>
      <Chexbox/>
    </>
  );
}

export default App;
