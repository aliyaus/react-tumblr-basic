import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';

function App() {

  const Navigator = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
