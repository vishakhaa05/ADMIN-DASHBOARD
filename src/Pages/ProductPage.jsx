import React from 'react'
import Header from "../Components/common/Header"
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import StatCard from "../Components/common/StatCard"
import {motion} from "framer-motion"
import ProductTable from '../Components/Products/ProductTable'
import SalesOverviewChart from "../Components/overview/SalesOverviewChart"
import CategoryDistributionChart from '../Components/overview/CategoryDistributionChart'


const ProductPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:py-8 lg:px-8">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y:200}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Products" icon={Package} value ="1234" color="6366F1"/>
          <StatCard name="Top Selling " icon={TrendingUp} value ="89" color="10B981"/>
          <StatCard name="Low Stock" icon={AlertTriangle} value ="23" color="F59E0B"/>
          <StatCard name="Top Revenue" icon={DollarSign} value ="$543,240" color="EF4444"/>
        </motion.div>
        </main>
        <ProductTable />

        {/* charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
    </div>
  )
}

export default ProductPage
