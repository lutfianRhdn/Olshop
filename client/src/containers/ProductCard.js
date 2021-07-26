import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'

export const ProductCard = ({title="title",category="category",price="1000",imgSource,store='store'}) => {
   
     return (
          <div className="">
               <div className="md:w-60 w-60 rounded-xl shadow-lg m-5">
                    <img src={imgSource} alt={title} className="w-full h-44 bg-green-500 rounded-t-xl">
                    </img>
                    <div className="mx-5 my-3 ">
                         <div className="flex justify-between mb-10">
                              <div>
                                   <h1 className="font-bold text-lg">{title}</h1>
                                   <h5>{category}</h5>
                              </div>
                              <div>
                                   <p>Rp.{price}</p>
                              </div>
                         </div>
                         <div className="flex  justify-between pb-5">
                              <p>{store}</p>
                              <Button title="View" />
                         </div>
                    </div>
               </div>   
          </div>
     )
}

const mapStateToProps = (state) => ({
     products:state.allProducts
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
