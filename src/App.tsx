import Router from './router';
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <BrowserRouter>
        <Router />
        <Toaster 
        position='top-center'
        reverseOrder={false}
        toastOptions={
          {
            duration: 3000,
            style: {
              borderRadius: '10px',
              background: '#a855f7',
              color: '#fff'
            }
          }
        }
        />
    </BrowserRouter>
  );
}

export default App;
