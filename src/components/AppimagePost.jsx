import Appcomment from './Appcomment';
import './AppimgePost.css';
function AppimagePost(props){
   
    const {images,onBgClick} = props;
   

    return(
        <div className="image-post">

            <div className="image-post-bg" onClick={onBgClick}/>
             <div className="image-post-content">
              
                <img src={images.imagename}/>
                <h4>{images.title} </h4> 
                <Appcomment/>   
                </div>
            
            </div>

    );
}
export default AppimagePost;