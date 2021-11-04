
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import { useState } from "react";
import Categorie from './Categorie';

function App() {

  const [cart, updateCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="App">
      <Banner />
      
      <Cart cart={cart} updateCart={updateCart}/>
     
      <ShoppingList cart={cart} updateCart={updateCart} />
      <Categorie />
      {/* <QuestionForm /> */}
      <Footer />
    </div>
  );
}

export default App;
