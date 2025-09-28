import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import Header from "../Components/common/Header"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import StatCard from "../Components/common/StatCard"
import SalesOverviewChart from "../Components/overview/SalesOverviewChart"
import SalesChannelChart from "../Components/overview/SalesChannelChart"
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";


 
const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:py-8 lg:px-8">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y:20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard 
          name="Total sales" icon={Zap} value ="$12345" color="6366F1"
          />
          <StatCard 
          name="New Users" icon={Users} value ="1234" color="8B5CF6"
          />
          <StatCard 
          name="Total Products" icon={ShoppingBag} value ="567" color="EC4899"
          />
          <StatCard 
          name="Conversion Rate" icon={BarChart2} value ="12.8%" color="10B981"
          />
        </motion.div>
        
       <div className="flex gap-4">
          <div className="flex-1">
            <SalesOverviewChart />
           </div>
          <div className="flex-1">
             <CategoryDistributionChart />
          </div>
          
      </div>
      

        <SalesChannelChart />
      </main>
  
    </div>
  )
}



export default OverviewPage
