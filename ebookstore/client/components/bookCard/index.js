import React, { Component } from 'react'

export class BookCard extends Component {
  render() {
    return (
      <div
      style={{position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      marginBottom: "20px",
      marginRight: "20px",
      width: "170px", height: "300px",
      cursor: "pointer"}}>
      <div>
         <div>
            <div>
              <div
               style=
               {{width: "170px", height: "240px",
               position: "relative"}}>
               <img style={{width: "170px", height: "240px"}} src={this.props.image} />
              </div>
              <div>
                <div
                style={{display: "none",
                width: "50px",
                height: "50px",
                position: "absolute",
                bottom: "12px",
                left: "35%",
                top: "180px",
                borderRadius: "99999px",
                background:  "white", borderWidth: "1px", borderStyle: "solid",  borderColor: "rgb(148, 193, 61)"}}>
                  <span style={{width: "25px",
                  height: "18px",
                  position: "absolute",
                  marginLeft: "-12px",
                  marginTop: "15px",
                  left: "50%"}}>
                  </span>
                </div>
                <div
                style={{display: "none",
                width: "27px", height: "43px",
                position: "absolute",
                right: "20px",
                top: "0px",
                background: "rgb(148, 193, 61)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 12px 0px"}}>
                 <span style={{width: "15px", height: "15px", position: "absolute", marginLeft: "6px", marginTop: "14px"}} > </span>
                </div>
                <div style={{display: "none",
                width: "170px",
                height: "60px",
                backgroundColor: "rgb(148, 193, 61)", paddingTop: "24px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 12px 0px"}}>
                </div>
              </div>
              <div
              style={{display: "inline-block",
              paddingTop: "8px", paddingLeft: "10px",
              height: "60px", width: "160px", margin: "0px",
              backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 12px 0px"}}>
                <div style={{
                fontSize: "12px", width: "125px", height: "40px",
                fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis",
                whiteSpace: "nowrap", color: "rgb(48, 64, 59)"}}>{this.props.title} <br/> <span style={{fontSize:"10px"}}>{this.props.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
export default BookCard;
