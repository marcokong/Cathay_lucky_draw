import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LuckyDraw from './Lucky_draw/Lucky_draw';
import LuckDrawResult from './Lucky_draw_result/Lucky_draw_result';
import Loading from './Loading/Loading'
import Purchase from './Purchase/Purchase'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LuckyDraw prizes={["Ipad", "Iphone", "Ipod"]} />} />
        <Route path='/result' element={<LuckDrawResult />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
