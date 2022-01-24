import React, { useState } from 'react';
import Nav from './Components/Nav';
import Page from './Components/Page'
import Footer from './Components/Footer'

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
      <Footer></Footer>
    </div>
  );
}

export default App;
