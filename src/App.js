import {useState} from 'react';

import Auth from "./components/Form/Auth";
import Home from './components/Home/Home';

function App() {
  
  const [error, setError] = useState(false);
  const [errorDiff, setErrorDiff] = useState(false);

  const [tokenId, setTokenId] = useState(
    window.localStorage.getItem('id')
  )

  return (
    <>
    <h1 className='text-center mt-5'>Super Heroes</h1>
    {tokenId ? 
      <Home 
        tokenId={tokenId} 
        error={error}
        setError={setError}
        errorDiff={errorDiff} 
        setErrorDiff={setErrorDiff}
      /> : 
      <Auth 
        error={error}
        setError={setError}
        errorDiff={errorDiff} 
        setErrorDiff={setErrorDiff}
      />
    }
    </>
  );
}

export default App;
