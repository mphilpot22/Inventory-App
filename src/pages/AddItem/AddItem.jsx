import React from 'react'
import './AddItem.css'

// Components
import InputForm from '../../components/InputForm/InputForm'

const AddItem = (props) => {
  return (
    <>
        <h1>Add Item</h1>
        <InputForm 
            items={props.items}
            setItems={props.setItems} 
            categories={props.categories}
            setCategories={props.setCategories} />
    </>
  )
}

export default AddItem