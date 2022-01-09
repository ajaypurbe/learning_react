import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import Footer from './components/Footer';


function App() {
  const username = "Ajay";
  const age = 24324;
  const address = "koteshwor";

  const data = {
    "pname": "this is product",
    "pprice": 123
  }
  return (
    <div>

      <Header username={username} address={address}></Header>
      <Mid></Mid>
      <Footer></Footer>
      <footer>
        <p>this is product name {data.pname}</p>
        <p>this is product price {data.pprice}</p>
      </footer>
    </div>
  )
}

export default App;

