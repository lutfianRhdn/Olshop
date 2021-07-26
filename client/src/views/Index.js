import React, { useState,useEffect} from 'react'
import CategoryCard from '../containers/CategoryCard'
import ProductCard from '../containers/ProductCard'
import Header from '../containers/Header'
import {api} from '../config/api'
export default function Index() {
     const [categories,setCategories]= useState([])
     const [products,setProducts] = useState([])
      useEffect(() => {
          api().get('/category').then(res=>{
               console.log(res)
               setCategories(res.data)
          })
          api().get('/product').then(res=>{
               setProducts(res.data)
          })
     }, [])
     return (
          <>
               <Header />
               <div className="flex h-64">
                    <div className="w-1/2 h-full bg-red-500"></div>
                    <div className=" flex w-1/2 flex-col">
                         <div className="w-full h-1/2 bg-green-500"> </div>
                         <div className="w-full h-1/2 bg-blue-500"> </div>
                    </div>
               </div>
               <div className="container my-5 mx-auto px-10">
                    <>
                         <h1 className="font-bold">Categories</h1>
                         <div className="flex flex-wrap  justify-center">
                              {categories.map(el=>{
                                   return (<CategoryCard title={el.name} imgSrc={el.image} to={`category/${el.name}`}  />)

                              })}
                         </div>
                    </>
                    <>
                         <h1 className="font-bold">Products</h1>
                         <div className="flex flex-wrap justify-center">
                              {products.map(el=>{
                                   return (<ProductCard
                                        title={el.name}
                                         imgSrc={el.images.length >0 ? el.images[0].path :''}
                                         category={el.category.name}
                                         store={el.store.name}
                                   />)
                              })}
                         </div>
                    </>
               </div>
               
          </>
     )
}
