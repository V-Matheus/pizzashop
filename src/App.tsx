import { Button } from "@/components/ui/button"
import './global.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

export function App() {

  return (
    <RouterProvider router={router}/>
  )
}

