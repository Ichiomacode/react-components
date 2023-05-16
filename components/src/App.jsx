import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Languages from './Component/Languages';
import SearchSection from './Component/SearchSection'
import './App.css'

function App() {
const [search, setSearch] = useState('')

  
  const handleSubmit = (e) => {
   setSearch(e.target.value);
    e.preventDefault();
    e.target.value = ""


  }
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <SearchSection handleSubmit={handleSubmit} search={search} />
        <Languages />
        <div>
          {search && (
            <p>
              Search Result- <strong>{search}</strong>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App