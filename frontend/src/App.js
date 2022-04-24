
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
         </Routes>
       </main>
       <Footer />
     </div>
   </Router>
 );
 }; 

export default App;
