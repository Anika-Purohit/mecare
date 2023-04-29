import React from 'react'
import { useState } from 'react';
const Section = ({title,description,isVisible,setIsVisible,visibleSection}) =>{
  return(
   <div className="border-2 inline-block text-slate-600 bg-slate-100 rounded-2xl p-3 m-5  shadow-xl">
   <img className="w-80 h-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsiXZKmchXUi9urgsmIvYhXConbOj9McfIciGMXgZYclNf1jTxtCRonZUh1gBUSetpLZE&usqp=CAU"/>
   <h3 className="font-bold font-mono ">{title}</h3>
   
   {isVisible?
   (<button className=" font-mono" 
   onClick={()=>setIsVisible()}>Hide</button>)
   :
   (<button className=" font-mono" 
   onClick={()=>setIsVisible()}>Show</button>) } 

   {isVisible && <p className="font-mono w-80">{description}</p>}
   </div>
  ) 
};

const Treatments = () =>
{
const[isVisible,setIsVisible] = useState(false);    
const[visibleSection,setVisibleSection] = useState("Treatment 1");
return (
   <div className=" ">
   <div className='flex flex-wrap justify-around'>
   <h3 className='inline-block'><Section title={"Treatment 1"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque "
   } isVisible={visibleSection=="Treatment 1"}
   setIsVisible={()=>setVisibleSection(visibleSection === "Treatment 1" ? "":"Treatment 1")
       }/></h3>    
   <h3 className='inline-block'><Section title={"Treatment 2"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
   } isVisible={visibleSection == "Treatment 2"}
   // add here
   setIsVisible={()=>setVisibleSection(visibleSection === "Treatment 2" ? "":"Treatment 2")

   }/></h3>  
   
   <h3 className='inline-block'><Section title={"Treatment 3"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque "
   } isVisible={visibleSection=="Treatment 3"}
   setIsVisible={()=>setVisibleSection(visibleSection === "Treatment 3" ? "":"Treatment 3")
       }/></h3> 

   <h3 className='inline-block'><Section title={"Treatment 4"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque "
   } isVisible={visibleSection == "Treatment 4"}
   setIsVisible={()=> setVisibleSection(visibleSection === "Treatment 4" ? "":"Treatment 4")
       }/></h3>  

   <h3 className='inline-block'><Section title={"Treatment 5"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
   } isVisible={visibleSection=="Treatment 5"}
   setIsVisible={()=>setVisibleSection(visibleSection === "Treatment 5" ? "":"Treatment 5")
       }/></h3> 

   <h3 className='inline-block'><Section title={"Treatment 6"} 
   description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
   } isVisible={visibleSection=="Treatment 6"}
   setIsVisible={()=>setVisibleSection(visibleSection === "Treatment 6" ? "":"Treatment 6")
       }/></h3> 
   </div>    
   </div>
)
}
export default Treatments
