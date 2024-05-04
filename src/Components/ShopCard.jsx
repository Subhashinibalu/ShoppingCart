import React, { useState } from "react";

const ShopCard = ({ productData, value, setValue }) => {

    const[status, setStatus] = useState(true);
    const addcart=()=>{
        setStatus(false);
        setValue((pre)=>pre+1)

    };
    const removecart=()=>{
        setStatus(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }
    const[status1, setStatus1] = useState(true);
    const addcart1=()=>{
        setStatus1(false);
        setValue((pre)=>pre+1)

    };
    const removecart1=()=>{
        setStatus1(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }

    const[status2, setStatus2] = useState(true);
    const addcart2=()=>{
        setStatus2(false);
        setValue((pre)=>pre+1)

    };
    const removecart2=()=>{
        setStatus2(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }

    const[status3, setStatus3] = useState(true);
    const addcart3=()=>{
        setStatus3(false);
        setValue((pre)=>pre+1)

    };
    const removecart3=()=>{
        setStatus3(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }


    const[status4, setStatus4] = useState(true);
    const addcart4=()=>{
        setStatus4(false);
        setValue((pre)=>pre+1)

    };
    const removecart4=()=>{
        setStatus4(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }

    const[status5, setStatus5] = useState(true);
    const addcart5=()=>{
        setStatus5(false);
        setValue((pre)=>pre+1)

    };
    const removecart5=()=>{
        setStatus5(true)
        if(value>0){
            setValue((pre)=>pre-1);
        }
        
    }
  return (
    <>
      {productData.map((element, index) => {
        return (
          
            <div key={index}>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className=" text-white position-absolute"
                    style={{ top: "0.3rem", right: "0.5rem" }}
                  >
                    <span className={element.black}>{element.tag}</span>{" "}
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{element.item}</h5>
                      <span className="text-muted text-decoration-line-through">
                        {element.originalPrice1}
                      </span>{" "}
                      {element.price1}
                      
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <span className={element.star}></span>
                        <span className={element.star}></span>
                        <span className={element.star}></span>
                        <span className={element.star}></span>
                        <span className={element.star}></span>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        {element.originalPrice}
                      </span>{" "}
                      {element.price}
                      <div className={element.hide}>{element.space}</div>
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className={element.design} href="#">
                        {element.option}
                      </a>
                      
                      {status ? <a className={element.designs} href="#a" onClick={addcart} >{element.add}</a>: <a className={element.designs} href="#" onClick={removecart} >{element.remove}</a> }
                      {status1 ? <a className={element.designs1} href="#a" onClick={addcart1} >{element.add1}</a>: <a className={element.designs1} href="#" onClick={removecart1} >{element.remove1}</a> }
                      {status2 ? <a className={element.designs2} href="#a" onClick={addcart2} >{element.add2}</a>: <a className={element.designs2} href="#" onClick={removecart2} >{element.remove2}</a> }
                      {status3 ? <a className={element.designs3} href="#a" onClick={addcart3} >{element.add3}</a>: <a className={element.designs3} href="#" onClick={removecart3} >{element.remove3}</a> }
                      {status4 ? <a className={element.designs4} href="#a" onClick={addcart4} >{element.add4}</a>: <a className={element.designs4} href="#" onClick={removecart4} >{element.remove4}</a> }
                      {status5 ? <a className={element.designs5} href="#a" onClick={addcart5} >{element.add5}</a>: <a className={element.designs5} href="#" onClick={removecart5} >{element.remove5}</a> }
                      
                      
                     

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          
        );
      })}
    </>
  );
};

export default ShopCard;
