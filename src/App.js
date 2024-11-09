
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import Research from './components/Research';
import Admission from './components/Admission';
import Innovation from './components/Innovation';
import Objectarray from './components/Objectarray';
import Courses from './components/Courses';
import Events from './components/Events';
import Register from './components/Register';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Word from './components/Word';
import Coreldraw from './components/Coreldraw';
import Excel from './components/Excel';
import Powerpoint from './components/Powerpoint';
import Introduction from './components/Introduction';
import BtnRegister from './components/BtnRegister';
import BtnLearnMore from './BtnLearnMore';
import SigninValidation from './components/SigninValidation';
import Upload from './components/Upload';
import Student from './Student';
import Create from './Create';
import Update from './Update';
import TutorialVideo from './components/TutorialVideo';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/foorter" element={<Footer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/objectarray" element={<Objectarray />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/word' element={<Word />} />
          <Route path='/corel' element={<Coreldraw />} />
          <Route path='/excel' element={<Excel />} />
          <Route path='/powerpoint' element={<Powerpoint />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/btnregister' element={<BtnRegister />} />
          <Route path='/btnlearnmore' element={<BtnLearnMore />} />
          <Route path='/signinvalidation' element={<SigninValidation />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/student' element={<Student />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/tutorialvideo' element={<TutorialVideo />}/>



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
