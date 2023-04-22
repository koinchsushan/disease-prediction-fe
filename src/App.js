import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/AccountLogin/SignIn';
import PersonalInfo from './Components/Syptom Checker/PersonalInfo/PersonalInfo';
import Symptoms from './Components/Syptom Checker/Symptoms/Symptoms';
import data from '../src/Components/Data/symptoms.json';
import Main from './Components/Main';
import SignUp from './Components/SignUp/SignUp';
import ReportPdf from './Components/PdfReport/ReportPdf';

function App() {
  return (
          <div>
            <Routes>
              <Route path="/home" element={<Main />} />
              <Route path="/" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="personalinfo" element={<PersonalInfo />} />
              <Route path="symptoms" element={<Symptoms bdata={data} />} />
              <Route path="report" element={<ReportPdf />} />
            </Routes>
          </div>
  );
}

export default App;
