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
      
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
