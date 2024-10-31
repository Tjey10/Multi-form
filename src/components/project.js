import React from 'react';



function Project({ formData, handleChange, error }) {
    return (  
      <div className="form1">
        <h2>Project information.</h2>
             <p>Please provide what project you are working on.</p>
             {error && <p style={{ color: 'red' }}>{error}</p>}
             <div className="form1-content">
                <div className="field">
                    <div className="field1">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" name='projectName'value={formData.projectName} onChange={handleChange} required />
                    </div>
                    <div className="field2">
                        <label htmlFor="course">Field</label>
                        <input type="text" name='course' value={formData.course} onChange={handleChange} required />
                    </div>
                
                </div>
                 
                <div className="field">
                    <div className="field1">
                        <label htmlFor="company">Company</label>
                        <input type="text" name='company' value={formData.company} onChange={handleChange} required/>
                    </div>
                    <div className="field2">
                        <label htmlFor="companyLine">Company No</label>
                        <input type="tel" name='companyLine' value={formData.companyLine} onChange={handleChange} required />
                    </div>
                
                </div>

                <div className="field">
                    <div className="field1">
                        <label htmlFor="comMail">Com. Mail</label>
                        <input type="email" name='comMail' value={formData.comMail} onChange={handleChange} required />
                    </div>
                
                </div>
             </div>
      </div>

    
    );
}

export default Project;