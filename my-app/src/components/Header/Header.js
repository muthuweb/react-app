import "./Header.scss";

import MainMenu from "../MainMenu/MainMenu";
import menuData from "../MainMenu/MainMenuData";

import logo from "../../../src/Assets/img/logo.png";

function Header() {
  return (
    <div className="main-head">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
            {/* <img src={require("../../../src/Assets/img/logo.png")} alt="Logo"/> */}
          </a>
          <MainMenu menuList={menuData} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
