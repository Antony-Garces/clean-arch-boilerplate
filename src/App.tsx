import './App.css'
import { Home } from './pages/home';
import {  useSelector } from 'react-redux'
import store, { AppStore } from './redux/store';




function App() {
  const user = useSelector((state: AppStore) => state.user)
  return (
      <div>
        <span>{JSON.stringify(store.getState().user)}</span>
        <Home/>
      </div>
  )
}

export default App
