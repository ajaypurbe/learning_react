
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Mid from './components/Mid';
import{BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Mid></Mid>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
