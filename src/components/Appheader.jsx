import './Appheader.css'
import Contact from './AppContact';
import { Input } from '@material-ui/core';
function Appheader(){
    function LoginPage() {
      window.location.href = "/login.com";
        //  window.location.assign("https://www.w3schools.com");
  }
  function HomePage() {
   
    window.location.href = "/";
}
  
    return(
      <div className="App-header">
      <section className="App-header-section">
        <div className="App-header-container">
             <header className="App-header">
             <nav class="menu-bar">
                         <div className="group">
                          <a className="item title"   onClick={HomePage}>TUMKiT</a>
                         </div>
                    <div className="group">
                        
                          {/* <a className="item" >Login</a> */}
                          <Input className="item title" type="button" value="Login" onClick={LoginPage} style={{ color: 'white'}}/>
                        
                    </div>
                </nav>
                

              </header>
         
         </div>
         <Contact/>
        
      </section>
      
    </div>

      
    );
}
export default Appheader;