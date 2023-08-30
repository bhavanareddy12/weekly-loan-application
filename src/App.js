import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  return (
    <div className="App h-100">
      {/* https://github.com/bhavanareddy12/weekly-loan-application */}
       <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
