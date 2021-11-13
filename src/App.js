import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LuckyDraw from './Lucky_draw/Lucky_draw';

function App() {


  return (
    <div className="App">
      <LuckyDraw prizes={["Ipad", "Iphone", "Ipod"]}></LuckyDraw>
    </div>
  );
}

export default App;
