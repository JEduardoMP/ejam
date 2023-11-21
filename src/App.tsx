import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Product from './components/product';
import ProgressBar from './components/progressBar';
import Subheader from './components/subheader';
import { StyledApp } from './styles/app.styles';

function App() {
  return (
    <StyledApp>
      <Header />
      <Subheader />
      <div className='container'>
        <h1>Wait ! your order in progress.</h1>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur</p>
        <ProgressBar />
        <Product />
      </div>
      <Footer />
    </StyledApp>
  );
}

export default App;
