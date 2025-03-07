import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"

function UserCartWrapper() {
  return <SheetContent className="sm:max-w-md bg-white hover:bg-slate-100">
    <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
    </SheetHeader>
  </SheetContent>
}

export default UserCartWrapper