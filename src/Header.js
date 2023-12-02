import { useState } from "react";

//const Header = (props) =>{            //you can also write this
const Header = ({country}) =>{
    const [name , setName] = useState("Ashima"); 

    return (
        <div className="header">
            {/* <p>Hello {name} from {props.country}</p> */}
            <p>Hello {name} from {country}</p>  
            <button className="btn" onClick={() => {
                setName("Mohit")
            }}>Change Name</button>
        </div>
    )
}

export default Header;