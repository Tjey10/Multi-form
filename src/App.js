import './App.css';
import './responsiveness.css';
import formImg from './images/debit-card.jpg'; 
import React, { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Project from './components/project';
import Plan from './components/plan';


function App() {
  const [pages, setPages] = React.useState(0);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    confirmPassword:"",
    password:"",
    projectName:"",
    course:"",
    company:"",
    companyLine:"",
    comMail:"",
    
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
  
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const validatePassword = ()=>{
    let errorMsg = "";

    if (pages === 0) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
        errorMsg = "All fields are required.";
      } else if (formData.password !== formData.confirmPassword) {
        errorMsg = "Passwords do not match.";
      }
    }

    if (pages === 1) {
      if (!formData.projectName || !formData.company || !formData.comMail) {
        errorMsg = "All fields on this page are required.";
      }
    }
  
    if (errorMsg) {
      setError(errorMsg);
      return false;
    }
  
   
    setError('');
    return true;
  }

  const handleSubmit = () => {
    console.log("Form submitted successfully!", formData);
    alert("Form submitted! Check the console for data.");
  };
  
  const changePage = () => {
          if(pages === 0) {
            return <Profile formData={formData} handleChange={handleChange} error={error}/>;
          } else if(pages === 1){
            return <Project formData={formData} handleChange={handleChange}/>;
          } else {
             return <Plan formData={formData} handleChange={handleChange}/>;
          }
       } 
       
       useEffect(()=>{

        document.querySelectorAll(".prog-1, .prog-2, .prog-3").forEach(el => {
          el.classList.remove("currProgress");
        });

        if(pages === 0) {
            document.querySelector(".prog-1").classList.add("currProgress");
        } else if(pages === 1){
          document.querySelector(".prog-2").classList.add("currProgress") ;
        } else {
          document.querySelector(".prog-3").classList.add("currProgress") ;
        }
     },[pages]);

  const indicator =[
    "Profile", "Project", "Plan"
  ]

  return (
    <div className="App">
        <div className="main">
        <div className="formImg">
              <img src={formImg} alt="form-image"/>
          </div>

          <div className="main-container" >
            <div className="indicators">
               <span><p className='prog-1'> {indicator[0]}</p><i class="fa-solid fa-caret-right"></i></span>
               <span><p className='prog-2'> {indicator[1]}</p><i class="fa-solid fa-caret-right"></i></span>
               <span> <p className='prog-3'> {indicator[2]}</p><i class="fa-solid fa-caret-right"></i></span>
            </div>
            <hr />

            <div className='details'>
                {changePage()}
            </div>

            <div className="main-btns">
            <button type="button" disabled={pages === 0} onClick={()=>{setPages(prevPages => Math.min(prevPages - 1))}} > Back</button>
            <button type="button"  onClick={()=>{
              if(pages === 2){
                handleSubmit();
              }
              else if(validatePassword()){setPages(prevPage => Math.max(prevPage + 1,2))}}} > {pages === 2 ? "Submit": "Next" }</button>
          </div>
          </div>

          
      
        </div>
    </div>
  );
}

export default App;
