
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyOrders from './screens/MyOrders/MyOrders';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import { useState } from "react";
import Delivery from './screens/Delivery/Delivery';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Tea from './components/Tea';
import Apparel from './components/Apparel';
import Spices from './components/Spices';
import Coconut from './components/Coconut';
import Rubber from './components/Rubber';
import Gem from './components/Gem';
import Cart from './components/Cart';

 const App = () =>{
const [search, setSearch] = useState("");
console.log(search);

 return (
   <Router>
     <div>
       <Header setSearch={setSearch} />
       <main>
         <Routes>
           <Route path="/" element={<LandingPage />} exact />
           <Route path="/register" element={<RegisterScreen />} exact />
           <Route path="/login" element={<LoginScreen />} exact />
           <Route path="/myorders" element={<MyOrders search={search} />} />
           <Route path="/profile" element={<ProfileScreen />} />
           <Route path="/delivery" element={<Delivery />} />
           <Route path="/" element={<Home/>} />
            <Route path="/view" element={<ViewProduct/>} />
            <Route path="/tea" element={<Tea/>} />
            <Route path="/apparel" element={<Apparel/>} />
            <Route path="/spices" element={<Spices/>} />
            <Route path="/coconut" element={<Coconut/>} />
            <Route path="/rubber" element={<Rubber/>} />
            <Route path="/gem" element={<Gem/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/add" element={<AddProduct/>} />
         </Routes>
       </main>
       <Footer />
     </div>
   </Router>
 );
 }; 

export default App;
