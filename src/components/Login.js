import React from "react"
import "../css/Login.css"

export default function Login(){

    const [formData, setFormData] = React.useState(
        {
            userName : "",
            pswd: "",
            remember: true
        }
    )

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="login-form">
                <input id="usernm" type="username" placeholder="Enter the username" name="userName" value={formData.userName} onChange={handleChange} />
                <input id="pwd" type="username" placeholder="Enter the password" name="pswd" value={formData.pswd} onChange={handleChange} />
                <div>
                    <input id="remember" type="checkbox" name="remember" checked={formData.remember} onChange={handleChange}/>
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}