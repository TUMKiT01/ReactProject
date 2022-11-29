
import { useState } from 'react';
import './App.css';
import Appheader from './components/Appheader';
import Appimage from './components/Appimage';
import AppimagePost from './components/AppimagePost';
import Appsearch from './components/Appsearch';
import images from './data/images';
import AppFooter from './components/AppFooter/Footer';





function App(){
 
  
  const [selected_image,setselected_image]= useState(images[null]);
  const [searchText,setsearchText] = useState('');


  function onImageOpenClick(index){
    setselected_image(index);
  }
  function onImagecloseClick(){
    setselected_image(null);
  }
  const filteredimage = images.filter((images) =>{
       return images.title.includes(searchText);
  });
  
  const imageElements = filteredimage.map((images,index)=>{
    return<Appimage key={index} images={images} onImageClick={onImageOpenClick}/>
  });
  let imagePost =null;
  if(!!selected_image){
        imagePost = <AppimagePost images = {selected_image} onBgClick={onImagecloseClick}/>
  }
  return(
  <div>
    <div className="App">
         <Appheader />
          
          <section className="App-section">
               <div className="App-container">
                  <Appsearch value ={searchText} onChange={setsearchText}/>
                   <div className= "App-grid"> 
                   {imageElements}
                    </div>  
              </div>
              
          </section>
          {imagePost} 
        
       </div>
  <AppFooter/> 
  </div>
    

)};
export default App



