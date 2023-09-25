import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App'
import App from './App'
import './index.css'
import './css/App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GeneralErrorpage from './component/generalerror'
import Imageupload from './pages/imageupload'
import Listings from './pages/become-a-host'
import BecomeAHost from './pages/become-a-host'
import Structure from './pages/structure'
import PrivacyType from './pages/privacty-type'
import Aboutplace from './pages/aboutplace'
import Overview from './pages/overview'
import Floorplan from './pages/floorplan'
import Standout from './pages/standout'
import Amenities from './pages/amenities'
import Photos from './pages/photos'
import Title from './pages/title'
import Description from './pages/description'
import FinishedSetup from './pages/finshedsetup'
import Visibility from './pages/visibility'
import Price from './pages/price'
import Legal from './pages/legal'
import Discount from './pages/discount'
import Receipt from './pages/receipt'
import AirbnbYourHome from './pages/AIrbnbyourspace'
import ContextProvider from './provider/context'
import PublicCelebration from './pages/publishCelebration'
import ManageSpace from './pages/manageYourSpace'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <GeneralErrorpage />
  },
  {
    path: '/airbnbyourhome',
    element: <AirbnbYourHome />,
    errorElement: <GeneralErrorpage />
  },
  {
    path: '/listing',
    element: <Listings />,
    errorElement: <GeneralErrorpage />
  },

  {
    path: '/become-a-host',
    element: <BecomeAHost />,
    children: [
      {
        path: "structure",
        element: <Structure />
      },
      {
        path: "overview",
        element: <Overview />
      },

      {
        path: "privacy-type",
        element: <PrivacyType />
      }

      ,
      {
        path: "aboutplace",
        element: <Aboutplace />
      },
      {
        path: "floorplan",
        element: <Floorplan />
      },
      {
        path: "standout",
        element: <Standout />
      },
      {
        path: "amenities",

        element: <Amenities />
      },
      {
        path: "photos",
        element: <Photos />
      },
      {
        path: "titles",
        element: <Title />
      }
      ,
      {
        path: "description",
        element: <Description />
      }
      ,
      {
        path: "finishedsetup",
        element: <FinishedSetup />
      },
      {
        path: "visibility",
        element: <Visibility />
      },
      {
        path: "price",
        element: <Price />
      },
      {
        path: "discount",
        element: <Discount />
      }
      ,
      {
        path: "legal",
        element: <Legal />
      },
      {
        path: "receipt",
        element: <Receipt />
      },
      {
        path: "publish-celebration",
        element: <PublicCelebration />
      }


    ]
  },
  {
    path: '/imageupload',
    element: <Imageupload />

  },
  {
    path: '/manage-your-space',
    element: <ManageSpace />

  }


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />

    </ContextProvider>

  </React.StrictMode>
)
