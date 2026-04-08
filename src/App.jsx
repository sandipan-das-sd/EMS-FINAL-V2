
import { Toaster } from "react-hot-toast"
import { Routes,Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import Attandance from "./pages/Attandance"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import PrintPayslip from "./pages/PrintPaySlips"
import LoginForm from "./components/LoginForm"

export default function App() {
  return (
   <>
    <Toaster />
    <Routes>
      <Route path="/login" element={<Login />} />
<Route path="/login/admin" element={<LoginForm role="admin" 
title="Admin Portal" subtitle="Sign in to manage the organization"
  
/>} />
<Route path="/login/employee" element={<LoginForm role="employee"

title="Employee Portal" subtitle="Sign in to view your dashboard"
/>} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/attendance" element={<Attandance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
      <Route path="/print/payslips/:id" element={<PrintPayslip />} />
    </Routes>
   </>
  )
}
