import React, { useState } from 'react';
import Nav from './Components/Nav';
import Page from './Components/Page'

function App() {
  const [page] = useState([
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

  const [currentPage, setCurrentPage] = useState(page[0])

  return (
    <div className="App">
      
      <Nav 
        page={page}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      <main>
      <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;
