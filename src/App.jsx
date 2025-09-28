import { Routes, Route } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import ProductsPage from "./Pages/ProductPage";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";
import Sidebar from "./Components/common/Sidebar";
import OrdersPage from "./Pages/OrdersPage";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";



function App() {
  return (
   <div className="flex h-screen bg-gray-500 text-gray-100 overflow-hidden">

    <div className="fixed inset-0 -z-10">
      <div  className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
       opacity-80"/>
      <div className="absolute inset-0 backdrop-blur-sm"/>
    </div>
    <Sidebar />
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/Users" element={<UsersPage />} />
      <Route path="/Sales" element={<SalesPage />} />
      <Route path="/Orders" element={<OrdersPage />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
   </div>
  )
}

export default App
