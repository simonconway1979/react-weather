var React = require('react');
var {Link} = require('react-router');

var About = function(props) {
  return (
    <div>
      <h1 className="text-center">About the React Weather App</h1>
      <p>The React Weather App uses Open Weather Map API to collect the weather information.
        You can read more about Open Weather API<a href='https://openweathermap.org/api'> here</a></p>
      <p>We are using Zurb Foundation styling. You can find info on Zurb
      <a href="http://foundation.zurb.com/"> here</a></p>
    </div>
  )
};

module.exports = About;
