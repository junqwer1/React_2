'use client'
import LoginForm from "../components/LoginForm";
import { useActionState, useState } from "react";

const LoginContainer = () => {
  const [ form, setForm ] = useState<{email?: string; password?: string}>({})
  const actionState = useActionState

  const handleChange = (e) => {
    setForm((form) => ({...form, [e.target.name]: e.target.value}))
  }
  
  return <LoginForm form={form} onChange={handleChange} />
}

export default LoginContainer;