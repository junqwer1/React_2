'use client'
import LoginForm from "../components/LoginForm";
import React, { useActionState, useState } from "react";
import { processLogin } from "../service/actions";

const LoginContainer = () => {
  const [ form, setForm ] = useState<{email?: string; password?: string}>({})
  const actionState = useActionState(processLogin, form)

  const handleChange = (e) => {
    setForm((form) => ({...form, [e.target.name]: e.target.value}))
  }
  
  return <LoginForm actionState={actionState} form={form} onChange={handleChange} />
}

export default React.memo(LoginContainer);