function Contact(){
  
    function ContactFacebook() {
      
        window.location.assign("https://www.facebook.com/kitchaponTUM/");
  }
  function ContactCV() {
      
    window.location.assign("https://drive.google.com/file/d/19RcctKKJGW7N23p7mFxX7aGCjFp6A9nE/view");
}

return(
<div classNameName="Test">
<div className="offcanvas offcanvas-start text-bg-dark" id="demo">
  <div className="offcanvas-header">
    <h1 className="offcanvas-title" style={{ textTransform: 'uppercase'}}>Contact</h1>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">

  <input className="btn btn-primary"  value="Facebook" onClick={ContactFacebook} style={{ color:"package"}}/>
  

    <p></p>
    <input className="btn btn-primary"  value="curriculum vitae (CV)" onClick={ContactCV} style={{ color:'package'}}/>
    
  </div>
</div>
<div className=" Text-header">
<div className="container-fluid mt-3">
  <h1 style={{ textTransform: 'uppercase'}}>Welcome to the website  by TUMKiT</h1>
  <p><strong>Tip:</strong> some beautiful paths can’t be discovered without getting lost:</p>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
    Learn more 
  </button >
</div>

</div>
</div>

)}
export  default Contact;
