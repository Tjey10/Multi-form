import React from 'react';


function Profile({ formData, handleChange, error}) {
    return (  
        <div className='form1'>
             <h2>Provide your information.</h2>
             <p>Please provide your personal information below</p>
             {error && <p style={{ color: 'red' }}>{error}</p>}

             <div className="form1-content">
                <div className="field">
                    <div className="field1">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="field2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} required />
                    </div>
                
                </div>
                 
                <div className="field">
                    <div className="field1">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="field2">
                        <label htmlFor="phone">Phone No.</label>
                        <input type="tel" name='phone'  minlength="9" maxlength="14" value={formData.phone} onChange={handleChange} required />
                    </div>
                
                </div>

                <div className="field">
                    
                    <div className="field1">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange}  required />
                    </div>
                    <div className="field2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password"  name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                
                </div>
             </div>
        </div>
    );
}

export default Profile;