 
 
 function DogadjajKartica({dogadjaj}) {
     return (
   
         <div className="card">
      
         <div className="card-header" >
              <img className='card-img-top'  src ={dogadjaj.slika}   /> 
         </div>
         <div className="card-body">
             <div className="tag tag-teal"> {dogadjaj.vreme}    </div>  
             
             <h4 className = "naslovKartice">  {dogadjaj.naziv}   </h4>
             <p className="opis">{dogadjaj.opis}</p>
 
             
             <p className='cena'>  {dogadjaj.mesto}  </p>   
            
             
             
         </div> 
     </div>
       
     );
   }
   
   export default DogadjajKartica;
   