import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ShopCard from './Components/ShopCard';


const App = () => {

    const productData = [{
        item:"Fancy Products",
        price1:"$40.00 - $80.00",
        hide:"invisible",
        space:".",
        option:"View options",
        design:"btn btn-outline-dark mt-auto",
        
    },{
        tag:"Sale",
        black:"badge bg-dark",
        item:"Special Item",
        star:"bi bi-star-fill",
        originalPrice:"$20.00",
        price:"$18.00",
        add:"Add to cart",
        remove:"Remove from cart",
        designs:"btn btn-outline-dark mt-auto"
    },{
        tag:"Sale",
        black:"badge bg-dark",
        item:"Sale Item",
        originalPrice1:"$50.00",
        price1:"$25.00",
        hide:"invisible",
        space:".",
        add1:"Add to cart",
        remove1:"Remove from cart",
        designs1:"btn btn-outline-dark mt-auto"
    },{
        item:"Popular Item",
        star:"bi bi-star-fill",
        price:"$40.00",
        add2:"Add to cart",
        remove2:"Remove from cart",
        designs2:"btn btn-outline-dark mt-auto"
    },{
        tag:"Sale",
        black:"badge bg-dark",
        item:"Sale Item",
        hide:"invisible",
        space:".",
        originalPrice1:"$50.00",
        price1:"$25.00",
        add3:"Add to cart",
        remove3:"Remove from cart",
        designs3:"btn btn-outline-dark mt-auto"
    },{
        item:"Fancy Products",
        price1:"$120.00 - $280.00",
        hide:"invisible",
        space:".",
        block:"d-block",
        option:"View options",
        design:"btn btn-outline-dark mt-auto"
        
    },{
        tag:"Sale",
        black:"badge bg-dark",
        item:"Special Item",
        star:"bi bi-star-fill",
        originalPrice:"$20.00",
        price:"$18.00",
        add4:"Add to cart",
        remove4:"Remove from cart",
        designs4:"btn btn-outline-dark mt-auto"
    },{
        item:"Popular Item",
        star:"bi bi-star-fill",
        price:"$40.00",
        add5:"Add to cart",
        remove5:"Remove from cart",
        designs5:"btn btn-outline-dark mt-auto"
    }
]



const [value,setValue]= useState(0);


    return (
       <>
       <Navbar value={value} />
       <Header />

       <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <ShopCard productData={productData} value={value} setValue={setValue} />   
                 
                </div>
            </div>
        </section>
  

       <Footer />
       
       </>
    );
};

export default App;