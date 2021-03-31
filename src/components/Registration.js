import React from 'react';
import '../App.css';

function registration (){
    return(
        <>
        <div id="imgContainer">
          <img src="/"></img>
            <h4>Let's get your accont setup</h4>
        </div>

        <div className="container2">
            <div id="loading" className="alert alert-info alert-dismissable hide">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            </div>

            <div className="form-group">
                <label for="id">ID</label>
                <div id="error_id"></div>
                <input type="text" className="form-control" name="register[id]" placeholder="Enter your ID">
                </input>
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <div id="error_password"></div>
                <input type="password" className="form-control" name="register[password]" placeholder="Enter your password">
                </input>
            </div>
            
            <div className="form-group">
                <label for="password2">Password_ok?</label>
                <div id="error_password"></div>
                <input type="password" className="form-control" name="register[password]" placeholder="One more enter your password">
                </input>
            </div>

            <div className="form-group">
                <label for="name">Name</label>
                <div id="error_name"></div>
                <input type="text" className="form-control" name="register[name]" placeholder="Please enter your full name">
                </input>
            </div>

            <div className="form-group">
                <label for="address">Address</label>
                <div id="error_address"></div>
                <input type="text" className="form-control" name="register[address]" placeholder="Please enter an address">
                </input>
            </div>

            <div className="form-group">
                <label for="email">Email</label>
                <div id="error_email"></div>
                <input type="text" className="form-control" name="register[email]" placeholder="Please enter an email address"></input>
                    <select name="emailaddr">
                        <option value="">Direct input</option>
                        <option value="gmail.com">gmail.com</option>
                    </select>
                
            </div>

            <div className="form-group">
                <label for="hp">Telephone</label>
                <div id="error_hp"></div>
                <input type="phone" className="form-control" name="register[hp]" placeholder="Please enter an telephone">
                </input>
            </div>

            <div className="form-group">
                <label for="csp">CSP</label>
                <div id="error_csp"></div>
                <input type="text" className="form-control" name="register[csp]" placeholder="Please enter an CSP">
                </input>
            </div>

            <div className="form-group">
                <label for="ad">AD</label>
                <div id="error_ad"></div>
                
                <input type="radio" className="form-control" name="register[ad]" checked>
                </input>
            </div>

            <div className="form-group">
                <label for="regdate">Subscription Date</label>
                <div id="error_regdate"></div>
                <input type="date" className="form-control" name="register[regdate]" >
                </input>
            </div> 

            <div className="form-group">
                <button className="btn btn-primary" id="register">Register Now!</button>   
            </div>

            <div id="registerBtnContainer">
                <p>No account? Sign up for free!</p>
                <span><button id="registerBtn" className="btn btn-outline-primary">Register</button></span>
           </div>
           
           <div id="loginBtnContainer">
                <p>Already signed up? Login now</p>
               <span><button id="loginBtn" className="btn btn-outline-primary">Login</button></span>
           </div>
           <div>
                <span>Forgot Username?</span> <span>Forgot Password?</span>
           </div>

        </div>
    </>

    );

}
export default registration;