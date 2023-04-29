//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Treatments from './Treatments';
import CustomerReview from './CustomerReview';
import Features from './Features';
const appRouter = createBrowserRouter([{
path:"/",
element:<Body/>,
children:[
  {
  path:"/",
  element:<Treatments/>,
  },
  {
  path:"features",
  element:<Features/>,
  },
  {
  path:"customer",
  element:<CustomerReview/>,
  },
]
}])
function App() {
  return (
    <div className="App">
    <Header/>
    <RouterProvider router={appRouter}></RouterProvider>
    <Footer/>
   
    </div>
  );
}

export default App;
