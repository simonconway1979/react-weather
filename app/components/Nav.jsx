var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },
  render: function (){
    return (
        <div className="top-bar">
          <div className="top-bar-title">
            <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
              <button className="menu-icon" type="button" data-toggle></button>
            </span>
            <a className="topbar-responsive-logo" href="#"><strong>React Weather App</strong></a>
          </div>
          <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                <li><Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                <li>
                  <form onSubmit={this.onSearch}>
                    <ul className="menu">
                      <li>
                        <input type="search" placeholder="Search weather by city" ref="search"/>
                      </li>
                      <li>
                        <input type="submit" className="button" value="Get Weather"/>
                      </li>
                    </ul>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
