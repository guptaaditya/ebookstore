import React, { Component } from 'react'

export class Book extends Component {
  render() {
    return (
      <div className="container">
        <div style={{float :"left", width:"40%"}}>
          <h3   className="col-md-12" style={{fontSize:"14px",textAlign:"center"}}><span style={{fontWeight:"bold"}}>Book Name :</span> Three Kings</h3>
          <h3   className="col-md-12" style={{fontSize:"14px",textAlign:"center"}}><span style={{fontWeight:"bold"}}>Author : </span>Rajesh Kumar</h3>
          <img className="img-responsive" src="http://localhost:1337/images/a.jpg" style={{width:"100%"}} alt="Bird"/>

          <h3   className="col-md-12" style={{fontSize:"14px",textAlign:"center"}}><span style={{fontWeight:"bold"}}>Price : </span>Rs. 45000</h3>

        </div>
        <div style={{float :"left", width:"10%"}}></div>
        <div style={{float :"left", width:"50%",marginLeft:"10px"}}>
          <h3   className="col-md-12" style={{fontSize:"14px",textAlign:"center"}}><span style={{fontWeight:"bold"}}>ISBN :</span> 13S45</h3>
          <hr/>
          <h3   className="col-md-12" style={{fontSize:"14px",textAlign:"center"}}><span style={{fontWeight:"bold"}}>Publish Date : </span>12-07-2017</h3>
          <hr/>
            <p style={{marginTop:"30px"}}><span style={{fontWeight:"bold"}}>Description :</span><br/>The 2017 Hong Kong Chief Executive election was held on 26 March 2017 for the 5th term of the Chief Executive of Hong Kong (CE), the highest office of the Hong Kong Special Administrative Region (HKSAR). Former Chief Secretary for Administration Carrie Lam beat former Financial Secretary John Tsang and retired judge Woo Kwok-hing, receiving 777 votes from the 1,194-member Election Committee.
              </p>
          </div>
        </div>
    )
  }
};
export default Book;
