import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from "./components/MyNav"
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNav />

      <Welcome/>  
      
      <LatestRelease/>

      <MyFooter/>
    </div>
  );
}

export default App;
