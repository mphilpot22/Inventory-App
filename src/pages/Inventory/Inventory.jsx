import React from 'react'
import './Inventory.css'
import InventoryList from '../../components/InventoryList/InventoryList'

const Inventory = (props) => {
  return (
    <InventoryList items={props.items} />
  )
}

export default Inventory