import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from './Components/Card';
import NewSheet from './Components/NewSheet';
import ViewPage from './Components/ViewPage';
import EditPage from './Components/EditPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path="/new-sheet" element={<NewSheet />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
