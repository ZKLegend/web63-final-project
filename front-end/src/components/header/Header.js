import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/loginSlice";
import { useNavigate, Link } from "react-router-dom";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

import "./header.css";
import golobeLogo from "../../assets/images/Logo.png";
import { BedIcon, PlaneIcon } from "../../assets/icon-components/IconComponent";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  const handleLogout = () => {
    dispatch(setIsLogin(false));
    navigate("/");
  };
  const handleAccount = () => {
    navigate("/account");
  };
  const handleFindFlight = () => {
    navigate("/flight/list");
  };
  const handleClickLogo = () => {
    navigate("/");
  };
  const items = [
    {
      label: (
        <div target="_blank" rel="noopener noreferrer" onClick={handleAccount}>
          account information
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div target="_blank" rel="noopener noreferrer" onClick={handleLogout}>
          log out
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div className="Header">
      <div className="flight-stay">
        <div className="findFlight" onClick={handleFindFlight}>
          <PlaneIcon />
          <p>Find Flight</p>
        </div>
        <div className="findStay">
          <BedIcon />
          <Link to="/hotel-search">Find Stays</Link>
        </div>
      </div>
      <img
        src={golobeLogo}
        alt="golobe-logo"
        className="golobe-logo"
        onClick={handleClickLogo}
        style={{ cursor: "pointer" }}
      ></img>
      {!isLogin ? (
        <div className="login-signUp">
          <div className="login">Login</div>
          <div className="signUp">
            <>Sign up</>
          </div>
        </div>
      ) : (
        <div className="favorite-user">
          <div className="favorite">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99954 18.5C9.69846 18.4996 9.40447 18.4086 9.15579 18.2389C5.47189 15.7381 3.87673 14.0234 2.99689 12.9514C1.12189 10.6663 0.224231 8.32016 0.249544 5.77953C0.279075 2.86813 2.61486 0.5 5.45642 0.5C7.52267 0.5 8.95376 1.66391 9.7872 2.63328C9.8136 2.66368 9.84622 2.68805 9.88286 2.70476C9.91949 2.72146 9.95928 2.73011 9.99954 2.73011C10.0398 2.73011 10.0796 2.72146 10.1162 2.70476C10.1529 2.68805 10.1855 2.66368 10.2119 2.63328C11.0453 1.66297 12.4764 0.5 14.5427 0.5C17.3842 0.5 19.72 2.86812 19.7495 5.78C19.7749 8.32109 18.8763 10.6672 17.0022 12.9519C16.1224 14.0239 14.5272 15.7386 10.8433 18.2394C10.5946 18.4089 10.3006 18.4998 9.99954 18.5Z"
                fill="#112211"
              />
            </svg>
            <span>Favourites</span>
          </div>
          <div className="user">
            <Dropdown
              className="favorite-user-avatar"
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()} href="/#"></a>
            </Dropdown>

            <span>user name</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
