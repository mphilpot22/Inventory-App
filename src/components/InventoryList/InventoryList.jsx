import React from 'react'
import './InventoryList.css'

const InventoryList = (props) => {
  return (
    <div className='items-list'>
        <h1>Inventory</h1>
        {props.items.map((item) => {
            return <div key={item.id}>
                <h3>{item.name}</h3>
                <div className="quantity-wrap">
                    <p>{item.quantity + " " + item.size + "s"}</p>
                    <div className="btn-wrap">
                        <button className="increment">+</button>
                        <button className="decrement">-</button>
                    </div>
                </div>
            </div>
        })}
    </div>
  )
}

export default InventoryList