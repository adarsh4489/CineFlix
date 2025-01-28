
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import appStore from './Utils/appStore'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <Provider store={appStore}>
    
      <div className=''>
     <Body/>
    </div>
    <ToastContainer/>
    </Provider>
  )
}

export default App
