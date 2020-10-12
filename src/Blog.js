import React from 'react';
import Navigation from './components/NavBar';

class Blog extends React.Component {
  render() {
    return(
      <div>
        <Navigation />
        <h1>React Assignment</h1>
        <p>
          Blog Page
        </p>
      </div>
    );
  }
}
export default Blog;
