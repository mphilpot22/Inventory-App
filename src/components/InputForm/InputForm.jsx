import React, { useState, useRef } from 'react'
import uuid from 'react-uuid'
import './InputForm.css'


const InputForm = (props) => {
  const [item, setItem] = useState({
    id: uuid(),
    name: "",
    category: "",
    size: "",
    quantity: 0
  })
  
  const selectRef = useRef(null)
  const categoryRef = useRef(null)
  const nameRef = useRef(null)

  // Form Handlers
  const itemNameHandler = (e) => {
    setItem({...item, name: e.target.value})
  }
  const itemCategoryHandler = (e, ref) => {
    selectRef.current.value = "";
    setItem({...item, category: e.target.value})
  }
  const itemSelectCategoryHandler = (e) => {
    categoryRef.current.value = "";
    setItem({...item, category: e.target.value})
  }
  const itemSizeHandler = (e) => {
    setItem({...item, size: e.target.value})
  }
  const itemQuantityHandler = (e) => {
    setItem({...item, quantity: e.target.value})
  }
  const itemSubmitHandler = (e) => {
    e.preventDefault();
    props.setItems([...props.items, {id: uuid(), name: item.name,
      category: item.category,
      size: item.size,
      quantity: item.quantity}
    ])
    e.target.reset()
    nameRef.current.focus()
    props.categories.forEach(category => {
      if (category === item.category) {
        return null
      } else {
        props.setCategories([...props.categories, item.category])
      }
    });
  }

  return (
    <form className="input-form" autoComplete='off' onSubmit={itemSubmitHandler}>
      <label htmlFor="item-name">Item Name</label>
      <input 
        required
        ref={nameRef}
        type="text" 
        id='item-name'
        placeholder='e.g. Tomato Sauce' 
        onChange={itemNameHandler}/>

      <label htmlFor="item-quantity">Quantity</label>
      <input 
        required
        type="text" 
        id="item-quantity" 
        placeholder='e.g. 20'
        onChange={itemQuantityHandler}/>

      <label htmlFor="item-size">Size</label>
      <input 
        required
        type="text" 
        id="item-size" 
        placeholder='e.g. Quart'
        onChange={itemSizeHandler}/>

      <label htmlFor="item-category category-select">Category</label>
      <input 
        ref={categoryRef} 
        type="text" 
        id='item-category' 
        placeholder='e.g. Canned Goods'
        onChange={itemCategoryHandler}/>
      <select 
        ref={selectRef} 
        name="category-select" 
        id="category-select"
        onChange={itemSelectCategoryHandler}>
        <option value="" defaultValue>Previous Categories</option>
        {props.categories.map(category => {
          return <option key={uuid()} value={category}>
            {category}
          </option>
        })}
      </select>        

      <button type='submit'>Add Item</button>
    </form>
  )
}

export default InputForm