import React from 'react';

function Plan({ formData, handleChange, error }) {
    return ( 
        <div className="form1">
            <h2>Provide your information.</h2>
             <p>Please provide your personal information below</p>
             {error && <p style={{ color: 'red' }}>{error}</p>}

             <div className="form1-content">
                <div className="field">
                    <div className="field1">
                        <label htmlFor="Plan1">Plan 1</label>
                        <input type="text" name='Plan1'  required />
                    </div>
                    <div className="field2">
                        <label htmlFor="Plan2">Plan 2</label>
                        <input type="text" name='Plan2' required />
                    </div>
                
                </div>
                 
                <div className="field">
                    <div className="field1">
                        <label htmlFor="Plan3">Plan 3</label>
                        <input type="text" name='Plan3' required/>
                    </div>
                    <div className="field2">
                        <label htmlFor="Plan4">Plan 4</label>
                        <input type="text" name='Plan4' required />
                    </div>
                
                </div>
             </div>
        </div>
     );
}

export default Plan;