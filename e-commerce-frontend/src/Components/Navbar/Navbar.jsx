import React, { useContext, useState }  from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu,setMenu] = useState("shop"); /*ã này đang khởi tạo một biến trạng thái menu với giá trị ban đầu là "shop", và bạn có thể sử dụng setMenu để thay đổi giá trị của biến này trong thành phần React của bạn*/
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className="nav-logo"> 
                <img src={logo} alt=""/>
                <Link style= {{textDecoration: 'none'}} to='/'><p>Shoppi</p> </Link>

            </div>

            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style= {{textDecoration: 'none'}} to='/'>Menu</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("iPhone")}}><Link style= {{textDecoration: 'none'}} to='/Iphone'>Iphone</Link>{menu==="iPhone"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("iPad")}}><Link style= {{textDecoration: 'none'}} to='/Ipad'>Ipad</Link>{menu==="iPad"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mac")}}><Link style= {{textDecoration: 'none'}} to='/Mac'>Mac</Link>{menu==="Mac"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Watch")}}><Link style= {{textDecoration: 'none'}} to='/Watch'>Watch</Link>{menu==="Watch"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Promotion")}}><Link style= {{textDecoration: 'none'}} to='/Promotion'>Promotion</Link>{menu==="Promotion"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Support")}}><Link style= {{textDecoration: 'none'}} to='/Support'>Support</Link>{menu==="Support"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default  Navbar