import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricing=[
    {
    imgUrl: "/pricing.jpg",
    title: "QUARTERLY" ,
    price:18000,
    length: 3
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALFY_EARLY" ,
      price:34000,
      length: 6
    },
      {
        imgUrl: "/pricing.jpg",
        title: "YEARLY" ,
        price:64000,
        length: 12
      }
  ]
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>
          {
            return(
              <div className="card" key={element.title}>
                <img src ={element.imgUrl} alt={element.title}/>
                <div className='title'>
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>for{element.length}Months</p>
                <p></p>
                </div>
                <div className="description">
                  <p>
                    <Check/>Equipment

                  </p>
                  <p>
                    <Check/>All Day Free Training 

                  </p>
                  <p>
                    <Check/>Free Restroom

                  </p>
                  <p>
                    <Check/>24/7 skilled support

                  </p>
                  <p>
                    <Check/>20 days  free GYM option

                  </p>
                  <Link to={"/"}>Join Now</Link>

                </div>
                


              </div>
            )
          }
          )
        }
      </div>
      
    </section>
  )
}

export default Pricing
