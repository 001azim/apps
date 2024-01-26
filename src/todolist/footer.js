 export default function FOOTER({length}){
const year =new Date()

return(


<footer> copyright &copy; {year.getFullYear()} {length}</footer>

    
)


}