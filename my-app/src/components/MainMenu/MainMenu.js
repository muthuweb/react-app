function Menu(props) {
  return (
    <div className="navbar-nav">
      {props.menuList.map((link) => {
        return (
          <a key={link.id} className="nav-link" href={link.url}>
            {link.page}
          </a>
        );
      })}
    </div>
  );
}

export default Menu;
