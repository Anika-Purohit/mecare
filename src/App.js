//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Treatments from './Treatments';
import CustomerReview from './CustomerReview';
import Features from './Features';
import NewsLetter from './NewsLetter';

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
  {
    path:"newsletter",
    element:<NewsLetter/>,
    },
]
}])
function App() {
  return (
    <div className="App">
   
    <RouterProvider router={appRouter}>
    <Header/>
    <Footer/>
    </RouterProvider>
   
    </div>
  );
}

export default App;
