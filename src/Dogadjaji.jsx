import { useState } from "react";
import DogadjajKartica from "./DogadjajKartica";

 
 
 function Dogadjaji({dogadjaji}) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
    
        setSort(true);
      }
      function sortDesc(){
        
        setSort(false);
      }
    return (
        <div className="all-events">
        {sort === true ? 
           dogadjaji
               .sort((a, b) => a.cena < b.cena ? -1 : 1)
              .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id}  />  ))
            :
            dogadjaji
            .sort((a, b) => a.price > b.price ? -1 : 1)
           .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id}    />  ))
        }
  
      </div>
      
    );
  }
  
  export default Dogadjaji;
  