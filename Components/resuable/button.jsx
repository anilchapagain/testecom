const Buttonnew = ({ text, clickMe,value,className}) => {
    return (
      <div className="blog-list">
        <button className = {className}value = {value} onClick={clickMe}>{text}</button>
       
          
       
      </div>
    );
  }
   
  export default Buttonnew;