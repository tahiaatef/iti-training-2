import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Mynav';
import Slider from './components/Slider';
import Myform from './components/Myform';
import MyCard from './components/Card';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Mynav></Mynav>
      <Slider></Slider>
      <Myform></Myform>
      <MyCard title="Card Title" text="Some quick example text to build on the card title and make up the
          bulk of the card's content."></MyCard>
      <Footer></Footer>
    </>
  );
}

export default App;
