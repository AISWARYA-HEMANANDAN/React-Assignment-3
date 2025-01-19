import { createBrowserRouter } from "react-router-dom";
import Userlayout from "../Layouts/Userlayout";
import Homepage from "../pages/Homepage";
import Productdetailspage from "../pages/Productdetailspage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Userlayout />,
        children: [
            {
                path: '',
                element: <Homepage />
            },
            {
                path: 'productdetails/:id',
                element: <Productdetailspage />
            }
        ]
    }
]

)