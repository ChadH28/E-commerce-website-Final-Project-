import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// CSS
import './App.css';
// Components
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
// Pages
import HomePage from './pages/home/home.page';
import ContactPage from './pages/contact/contact.page';
import AboutPage from './pages/about/about.page';
import ProductPage from './pages/product/product.page';
import CartPage from './pages/cart/cart.page';
import SigninPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import ProductMangement from './pages/management/product-mangement.page';
import ShippingPage from './pages/shipping/shipping.page';
import PaymentsPage from './pages/payments/payments.page';
import OrderPage from './pages/orders/order.page';


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