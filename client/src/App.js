import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './components/List';
import EditLangauge from './components/EditLanguage'
import NewLanguage from './components/NewLangauge';

function App() {
  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/edit/:id' element={<NewLanguage method="PUT" />} />
          <Route path='/new' element={<NewLanguage method="POST" />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
