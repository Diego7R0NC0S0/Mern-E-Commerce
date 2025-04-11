import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-background rounded-lg  ">
      <div className="p-4 border-b bg_dt3 ">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4 bg_dt4 sombra">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment >
            <div>
              <h3 className=" text-base font-bold ">{keyItem}</h3>
              <div className="grid gap-2 mt-2 ">
                {filterOptions[keyItem].map((option) => (
                  <Label className="flex items-center gap-2 font-medium tx_dt ">
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator className="bg-slate-300" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
