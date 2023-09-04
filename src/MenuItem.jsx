import React from 'react'

const MenuItem = ({item}) => {
  return (
    <div className='menuCard'>
        <img className='img1'  src={item.img} alt={item.title} />
        <div className='namePrice'>
        <h4 className='menuTitle'>{item.title}</h4> <h4 className='price'> $ {item.price}</h4>
        </div>
        <p className='desc'>{item.desc}</p>

    </div>
  )
}

export default MenuItem