import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// CSS
import './App.css';
// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// Pages
import HomePage from './pages/Homepage';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/Aboutpage';
import ProductPage from './pages/Productpage';
import CartPage from './pages/Cartpage';
import SigninPage from './pages/Signinpage';
import RegisterPage from './pages/Registerpage';
import ProductMangement from './pages/Productmangement';
import ShippingPage from './pages/Shippingpage';
import PaymentsPage from './pages/Paymentspage';
import OrderPage from './pages/Orderpage';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Sidebar/>
      <main className='main'>
        <Route path='/' exact={true} component={HomePage}/>
        <Route path='/product/:id' component={ProductPage}/>
        <Route path='/cart/:id?' component={CartPage}/>
        <Route path='/signin' component={SigninPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/management' component={ProductMangement}/>
        <Route path='/shipping' component={ShippingPage}/>
        <Route path='/payment' component={PaymentsPage}/>
        <Route path='/placeorder' component={OrderPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/about' component={AboutPage}/>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;