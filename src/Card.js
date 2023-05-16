import React from 'react'

function Card(props) {
    console.log(props.datum);
    const datum = props.datum
  return (
      <div className="card col-3">
          <div className="card1" href="#">
              <p>{datum.id}</p>
              <p className="small">{datum.title}</p>
              <div className="go-corner" href="#">
                  <div className="go-arrow">
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card
