import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  // const history = useHistory();
  //State
  const [{ basket, user }, dispatch] = useStateValue();
  // Function
  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
      // .then((auth) => {
      //   history.push("/");
      // })
      // .catch((error) => alert(error.message));
    }
  };

  const testEmail = () => {
    if (user?.email) {
      const index = user?.email.indexOf("@");
      // console.log(user?.email.slice(0, index));
      if (index < 10) {
        return user?.email.slice(0, index);
      } else {
        return user?.email.slice(0, 10);
      }
    } else return "Guest";
  };

  //return
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={authenticationHandler}>
            <div className="header__optionLineOne header__optionHello">
              Hello {testEmail()}
            </div>
            <div className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>

        <div className="header__option" onClick={testEmail}>
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">&amp; Orders</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <div className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
