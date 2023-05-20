import { MdDescription, MdLockOutline } from 'react-icons/md';
import './App.css';
import User from './Image/user.png'
import Editor from './components/Editor/Editor';
import SideBar from './components/SideBar/SideBar';

function App() {


  return (

    <div className="App">
       <header className="header-section">

        <span className="doc-icon">
          <MdDescription size="50px" color="#2784fd" className='doc-icon-1'/>
        </span>

        <div className='header-content-section'>
          <h2>Untitled document</h2>

          <div className='functions'>

         
            <p className='option' >File</p>
            <p className='option'>Edit</p>
            <p className='option'>View</p>
            <p className='option'>Insert</p>
            <p className='option'>Format</p>
            <p className='option'>Tools</p>
            <p className='option'>Extensions</p>
            <p className='option'>Help</p>
          </div> 

        </div>

        <span className='share-button'>
           <div>
           <MdLockOutline className='lock-icon'/>
           <span>Share</span>
           </div>
        </span>

        <img src={User} alt="icon" className='user-icon'/>

       </header>

     <div className='Text-Editor-section'>
      <Editor/>
      <SideBar/>   
     </div>
       
    </div>
  );
}

export default App;
