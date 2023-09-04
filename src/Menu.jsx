import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({items}) => {
  return (
    <section>
        {items.map((item)=>{
            return(
                <div>
                  <MenuItem key={item.id} item = {item}/>
                </div>
            )
        })}
    </section>
  )
}

export default Menu