import { ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";

function AdminSideBar() {
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div className="flex items-center gap-2">
          <ChartNoAxesCombined size={30} />
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
        </div>
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;
