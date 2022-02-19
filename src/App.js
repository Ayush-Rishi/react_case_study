import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuComponent from './components/menucomponent';
import CompaniesListComponent from './components/companieslistcomponent';
import LoginComponent from './components/logincomponent';
import WatchListComponent from './components/watchlistcomponent';
import PerformanceComponent from './components/performancecomponent';

function App() {
  // localStorage.setItem("isLoggedIn", false);
  return (
    <BrowserRouter>
      <div>
        {/*<LoginComponent/>*/}
        <MenuComponent login={false}/>
        
        <Routes>
          <Route path="/login" element={<LoginComponent />} component={LoginComponent} />
          <Route path="/companies" element={<CompaniesListComponent />} component={CompaniesListComponent} />
          <Route path="/watchlist" element={<WatchListComponent />} component={WatchListComponent} />
          <Route path="/compareperformance" element={<PerformanceComponent />} component={PerformanceComponent} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;