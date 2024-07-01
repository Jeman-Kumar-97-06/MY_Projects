import { useState,useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";


const Cart = () => {
    const {user}           = useAuthContext();
    const [cartI,setCartI] = useState([]);
    const [total,setTotal] = useState(0);
    useEffect (()=>{
        const fetchItems = async () => {
            const response = await fetch(`/book_store/cart/${user.useridyo}`,{headers:{"Authorization":`Beared ${user.token}`}});
            const json     = await response.json();
            if(response.ok)
                {
                    setCartI(json);
                    let totalL = 0;
                    for(var k = 0;k<json.length;k++){
                        totalL = totalL + Number(json[k].price);
                    }
                    setTotal(totalL)                    
                }
        }
        fetchItems();
    },[user]);
    return (
        <div className="user_cart_items_list">
            <h2>Check Out</h2>
            <div className="row">
                <div className="col-75">
                    <div className="container">
                    <form action="#">
                    <div className="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" className="btn"/>
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container">
      <h4>Cart <span className="price" style={{color:'black'}}><i className="fa fa-shopping-cart"></i> <b>{cartI.length}</b></span></h4>
      {cartI && cartI.map(cI=>(<p><a href="#">{cI.title}</a> <span className="price">{cI.price}</span></p>))}
      <hr/>
      <p>Total <span className="price" style={{color:"black"}}><b>{Math.round(total*100)/100}</b></span></p>
    </div>
  </div>
</div>

        </div>
    )
}

export default Cart;




