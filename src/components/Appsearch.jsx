import './Appsearch.css'
function Appsearch(props){
    const {value ,onChange} = props;
    return(
    <div className='App-search'>
         <input className='App-search-input'type='text' placeholder='Search'
            value={value} 
             onChange={(event) => {onChange(event.target.value)}}  //ทำให้ลบได้
            />
    </div>

    );
}
export  default Appsearch;