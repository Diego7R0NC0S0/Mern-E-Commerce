import { Outlet } from "react-router-dom"
import ShoppinHeader from "./header"


function ShoppingLayout() {
  return (
    <div className="flex flex-col bg_dt2 overflow-hidden">
        {/* Common Header */}
        <ShoppinHeader/>
        <main className="flex flex-col w-full ">
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout