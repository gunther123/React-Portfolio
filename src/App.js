import React, { useState } from 'react';
import About from './Components/About'
import Nav from './Components/Nav';
// import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
    },
    {
      name: "Contact Me"
    },
    {
      name: "Resume"
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="App">
      <Nav></Nav>
      <About></About>

    </div>
  );
}

export default App;
