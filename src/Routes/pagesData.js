import Dashboard from '../Pages/dashboard/Dashboard'
import VillagesList from '../Pages/villageList/VillagesList'
import CustomersList from '../Pages/customer/CustomersList'
import CustomerDetailsList from '../Pages/customer/CustomerDetailsList'

export const pagesData = [
      {
        path: "/dashboard",
        element: <Dashboard />,
        title: "dashboard"
      },
      {
        path: "/villagesList/:?",
        element: <VillagesList />,
        title: "village list"
      },
      {
        path: "/customersList/:?",
        element: <CustomersList />,
        title: "customer list"
      },
      {
        path: "/customerDetailsList/:?",
        element: <CustomerDetailsList />,
        title: "customer list"
      },
]
