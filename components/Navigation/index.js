export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/hwg-logo-new.webp" alt="logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Gaga Adi Lesmana Putra <span>Front End Developer</span></a></li>
        <li><div className="profile-circle"></div></li>
      </ul>
    </nav>
  );
};
