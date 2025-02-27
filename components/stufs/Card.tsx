import { ShoppingCart } from 'lucide-react'
const Card = () => {
   return (
      <div className="flex items-center gap-2">
         <ShoppingCart size={24} className="text-gray-700" />
         <span className="text-lg font-medium">Cart</span>
      </div>
   )
}
export default Card
