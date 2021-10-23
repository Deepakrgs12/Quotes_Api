import { useState, useEffect } from "react";
const Showquotes=()=>{
    const [quotes, setQuotes] = useState(" Be the change that you want to see in the world. ");
    const[author, setAuthor] = useState("Mahatma Gandhi ");
    //setRnum] = useState(0);

const shownextquotes = () => {

    var g=1
    g=g+1;
    console.log(g);
    console.log("click me");
    

}

   


const getQuotes= async (e) =>
{      e.preventDefault();
    
     const url="https://type.fit/api/quotes";
   try{
       console.log("inside the try block");
      const apidata= await fetch(url);
     //console(apidata.json());
      const pr= await apidata.json();
     const d1= Math.random();
     const f=Math.random();
     const z= Math.random();
     const w= d1*f*z;
     const d=Math.floor(w*1000);
     console.log(d)
     console.log(pr[d].text);
     console.log(pr[d].author);
      setQuotes(pr[d].text);
      setAuthor(pr[d].author);

   
     
   }
   catch(error)
   {
      console.log("eror is occured");
   }
  
    
}

// useEffect( async() => {
//     let apidata;
//     let pr;
    
//     const url="https://type.fit/api/quotes";
//     try{
//         console.log("inside the try use effect block");
//         apidata= await fetch(url);
//       //console(apidata.json());
//         pr= await apidata.json();
       
       
//        setAuthor(pr[0].text);
//        setQuotes(pr[0].author);
 
//     //   console.log(pr[0].author);
//     //   console.log(pr[0].text);
//     }
//     catch(error)
//     {
//        console.log("eror is occured");
//     }
   
 
//   });

  return(  <div> 
      <div className="Header">
         <h1> MOST POPUPLAR MOTIVATIONAL QUOTES</h1>
      </div>
      <div>   
   <h1>{quotes}</h1>
    {author === null ? <h3> BY Our Team</h3>:<h3>{author}</h3>}

</div>
<button className="button" onClick ={getQuotes}>  Next Quotes</button>
    </div>)
};

export default Showquotes;