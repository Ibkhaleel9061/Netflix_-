
import './App.css';
import Navbar from './compnte/Navbar/Navbar';
import RowPost from './compnte/Rowpost/Rowpost';
import Banner from './compnte/banner/Banner';

import{orignals,tranting,Romatic,comady} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      
      <RowPost url={orignals} titile='popular on  ' />
      <RowPost url={tranting} titile='Trending now' />
      <RowPost url={Romatic} titile='Romatic Movise' />
      <RowPost url={comady} titile='comady Movise' />

     
      
    </div>
  );
}

export default App;
