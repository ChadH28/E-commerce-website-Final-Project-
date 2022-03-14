import React from 'react';
import './Contact&Aboutpage.css';
import image from '../../SouthAfrica.png';

function Contactpage() {
    return (
        <div className="container">
            <div className="row">
            <div className='col s12 m12 l12'>
                <h2>Contact Us</h2>
                <p>Need help with your order? Have a question about sizing? Feel free to get in touch with us with any questions you may have!</p>
                <p>Email: fineprint@gmail.com</p>
                <p>Phone: 021.231.5933</p>
            </div>
                <div className='col s6 m6 l6'>
                    <img src={image} alt='mapofSA' className='local'/>
                </div>
                <div className='col s6 m6 l6'>
                    <form action="https://formspree.io/xoqkzwko" method="POST" className='form-container'>
                        <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John"/>
                        <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Doe"/>
                        <label htmlFor="country">Province / State</label>
                            <select className="browser-default" id="province" name="province">
                                <option value="Western Cape">Western Cape</option>
                                <option value="Eastern Cape">Eastern Cape</option>
                                <option value="Northern Cape">Northern Cape</option>
                                <option value="North West">North West</option>
                                <option value="Free State">Free State</option>
                                <option value="Kwazulu Natal">Kwazulu Natal</option>
                                <option value="Gauteng">Gauteng</option>
                                <option value="Limpopo">Limpopo</option>
                                <option value="Mpumalanga">Mpumalanga</option>
                            </select>
                        <label for="subject">Subject</label> 
                            <textarea id="subject" name="subject" placeholder="Write something.." row='3' className="materialize-textarea"  data-length="120"/>
                        <input class="waves-effect waves-light btn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
