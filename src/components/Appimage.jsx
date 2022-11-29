import './Appimage.css'

function Appimage(props){
    const {images,onImageClick} =props;
    return(
 <div class="column">
    <div className= "App-image">
        
              <img src={images.imagename} onClick={()=> {onImageClick(images)}} className="hover-shadow cursor"/>
              <h1>{images.title}</h1>

 
        </div>
    </div>
    );
}
export default Appimage;