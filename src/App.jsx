import { lazy, Suspense } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "../store/store"
const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const AddBlog = lazy(() => import('./AddBlog'));
const EditBlog = lazy(() => import('./EditBlog'));
const SingleBlog = lazy(() => import('./SingleBlog'));
const Protected = lazy(() => import('./Protected'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {/* <Suspense fallback={<h2>Loading...</h2>} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path = '/blog/add' element={<Protected><AddBlog /></Protected>} />
          <Route path='/blog/edit' element={<Protected><EditBlog /></Protected>} />
          <Route path='/blog/id' element={<Protected><SingleBlog /></Protected>} />
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
    </Provider>
    
  )
}

export default App
