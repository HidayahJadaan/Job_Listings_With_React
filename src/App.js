import './App.css';
import Header from './components/header/Header';
import JobList from './components/jobs/JobList';
import JobDetails from './components/job-details/JobDetails';
import './data/data'
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
 
  return(
    <div>

      <Header/>

      <Routes>
        <Route path='/'  element={<Navigate to='/jobs' />}/>
        <Route path='/jobs'  element={<JobList />}/>
        <Route path='/jobs/:position'  element={<JobDetails />}/>
      
      </Routes>
    </div>
  );
}

export default App;
