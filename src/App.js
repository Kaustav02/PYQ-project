import React from 'react'
import Home from './routes/Home';

import Contact from './routes/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './routes/Services';

// const download = (url)=>{
//   const filename = url.split('/').pop();
//   const atag = document.createElement("a");
//   atag.href = url;
//   atag.setAttribute('download',filename);
//   document.body.appendChild(atag);
//   atag.click();
//   atag.remove();
//  }
//  return (
//    <div>
//      <button >
//        download
//      </button>
//    </div>
//  )

const pdf_url = 'http://localhost:3000/pdf.pdf';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    </Router>
  );
}

export default App;
