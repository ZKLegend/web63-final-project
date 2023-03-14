import "./AccountInfo.css";
import { useSelector } from "react-redux";
const AccountInfo = () => {
  const userr = useSelector((state) => state.auth.login.currentUser);

  const user = {
    userName: userr.username,
    email: userr.email,
    passWord: "********",
    phoneNumber: userr.phonenumber,
    address: userr.address,
    birth: "02-01-1990",
  };
  console.log(userr);
  return (
    <div className="AccountInfo">
      <h1 className="trade-gothic-lt-extended-bold-32px">Account</h1>
      <div className="account-detail">
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Name
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.userName}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Email
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.email}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Password
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.passWord}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Phone number
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.phoneNumber}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Address
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.address}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Date of birth
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {user.birth}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0731 3.05188L7.26406 6.86844C7.11684 7.01602 6.9359 7.12552 6.73688 7.1875L5.9275 7.45844C5.73542 7.51268 5.53234 7.51473 5.3392 7.46436C5.14606 7.414 4.96985 7.31305 4.82871 7.17191C4.68758 7.03078 4.58662 6.85456 4.53626 6.66142C4.4859 6.46828 4.48794 6.26521 4.54219 6.07312L4.81313 5.26375C4.87492 5.06478 4.98421 4.88385 5.13156 4.73656L8.94812 0.926875C8.98311 0.89193 9.00694 0.847395 9.01662 0.798903C9.02629 0.750411 9.02136 0.70014 9.00247 0.654447C8.98357 0.608754 8.95154 0.569692 8.91044 0.5422C8.86934 0.514709 8.82101 0.500023 8.77156 0.5H2.25C1.78587 0.5 1.34075 0.684375 1.01256 1.01256C0.684375 1.34075 0.5 1.78587 0.5 2.25V9.75C0.5 10.2141 0.684375 10.6592 1.01256 10.9874C1.34075 11.3156 1.78587 11.5 2.25 11.5H9.75C10.2141 11.5 10.6592 11.3156 10.9874 10.9874C11.3156 10.6592 11.5 10.2141 11.5 9.75V3.22844C11.5 3.17899 11.4853 3.13066 11.4578 3.08956C11.4303 3.04846 11.3912 3.01643 11.3456 2.99753C11.2999 2.97864 11.2496 2.97371 11.2011 2.98338C11.1526 2.99306 11.1081 3.01689 11.0731 3.05188Z"
                fill="black"
              />
            </svg>
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
