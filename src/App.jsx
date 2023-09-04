import Dishes from './data'
import Title from './Title';
import Menu from './Menu'
import { useState } from 'react';

const App = () => {

  const [items,setItems] = useState(Dishes)

  const allHandeler = () => {
    setItems(Dishes)
  }

  const breakFastHandler = () => {
    setItems(Dishes);
    var list = Dishes.filter((obj) => obj.category == 'breakfast');
    setItems(list);
  }

  const lunchHandeler = ()=>{
    setItems(Dishes);
    var list1 = Dishes.filter((obj) => obj.category == 'lunch');
    setItems(list1);
  }

  const shakesHandeler = ()=>{
    setItems(Dishes);
    var list2 = Dishes.filter((obj) => obj.category == 'shakes');
    setItems(list2);
  }


  return <main>
    <Title/>
    <button className='btn btn1' onClick={()=>allHandeler()}>All</button>
    <button className='btn btn1' onClick={()=> breakFastHandler()}>Break Fast</button>
    <button className='btn btn1' onClick={()=>lunchHandeler()}>Lunch</button>
    <button className='btn btn1' onClick={()=>shakesHandeler()}>Shakes</button>
    <Menu items = {items}/>
  </main>;
};
export default App;
