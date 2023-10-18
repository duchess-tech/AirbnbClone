import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import './css/App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Overview from './pages/overview';
import PrivacyType from './pages/privacty-type';
import Aboutplace from './pages/aboutplace';
import ContextProvider from './provider/context';


const Home = lazy(() => import('./App'));
const GeneralErrorpage = lazy(() => import('./component/generalerror'));
const Imageupload = lazy(() => import('./pages/imageupload'));
const Listings = lazy(() => import('./pages/become-a-host'));
const BecomeAHost = lazy(() => import('./pages/become-a-host'));
const Structure = lazy(() => import('./pages/structure'));
const Floorplan = lazy(() => import('./pages/floorplan'));
const Standout = lazy(() => import('./pages/standout'));
const Amenities = lazy(() => import('./pages/amenities'));
const Photos = lazy(() => import('./pages/photos'));
const Title = lazy(() => import('./pages/title'));
const Description = lazy(() => import('./pages/description'));
const FinishedSetup = lazy(() => import('./pages/finshedsetup'));
const Visibility = lazy(() => import('./pages/visibility'));
const Price = lazy(() => import('./pages/price'));
const Legal = lazy(() => import('./pages/legal'));
const Discount = lazy(() => import('./pages/discount'));
const Receipt = lazy(() => import('./pages/receipt'));
const AirbnbYourHome = lazy(() => import('./pages/AIrbnbyourspace'));
const PublicCelebration = lazy(() => import('./pages/publishCelebration'));
const ManageSpace = lazy(() => import('./pages/manageYourSpace'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>

)
