export const Navigation = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <a href="/">
              <img src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div className="nav-links">
            <a href="/" target="_blank">Home</a>
            <a href="/" target="_blank">Category</a>
            <a href="/" target="_blank">About</a>
            <a href="/" target="_blank">Contact</a>

            <div className="nav-search">
              <div className="form-search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  name="search"
                  className="form-control form-input"
                  placeholder="Search something here!"
                />
              </div>
            </div>

            <div className="nav-button">
              <button>Join the community</button>
            </div>
          </div>

          <div className="nav-search-icon">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div className="rectangle-navbar"></div>
    </div>
  );
};
