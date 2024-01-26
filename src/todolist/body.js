import { useState } from "react"



export default function BODY({items,setitems,newitems,setnewitems}){




    let generate =()=>{
        const name=['learn','earn','grow']
        let result=Math.floor(Math.random()*name.length)
    return(name[result])
    }


 

    const handlecheck=(id)=>{

        const checklistupdated=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        setitems(checklistupdated)
        localStorage.setItem('todolist',checklistupdated)
        
        }
        
        const remove=(id)=>{
           let updatedlist=items.filter((item)=>item.id!=id)
        setitems(updatedlist)
        
        }
        
        
      


    return(
        <>
            
           

            {console.log(newitems)}
    <p>  {generate()} </p>

{(items.length)? (
  <ul >{items.map((item)=>(

<li>
     <input type="checkbox" checked={item.checked}
     onChange={()=>handlecheck(item.id)}/>
<label>{item.item}</label>
<button type="button" onClick={()=>remove(item.id)}>delete</button>
</li>))


  }





  </ul>
    
    

  
):(<p>your list is empty</p>)}    
        </>
   
    






    )
    
    }