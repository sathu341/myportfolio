import {useEffect} from 'react'
function ProductList(){
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
    })
    return(
        <>
        
         <h1> Products</h1>
        </>
    )
}
export default ProductList;