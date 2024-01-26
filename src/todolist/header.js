import React from "react"



function HEADER ({title}){



return (

<header >
<h1>{title}</h1>
</header>


)


}
HEADER.defaultProps={
    title:"test"
}
export default HEADER