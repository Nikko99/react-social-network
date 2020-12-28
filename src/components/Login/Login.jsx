import React from 'react'
import s from './Login.module.css'
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
   return (
      <Form onSubmit={ props.onSubmit }>
         { props => (
            <form onSubmit={ props.handleSubmit }>
               <div>
                  <Field name='login' component='input' />
               </div>
               <div>
                  <Field name='password' component='input' />
               </div>
               <div>
                  <Field name='remember' component="input" type='checkbox'/> Remember me
               </div>
               <div>
                  <button>Sign In</button>
               </div>
            </form>
         ) }
      </Form>
   )
}

const Login = () => {
   const onSubmit = (formData) => {
      console.log(formData)
   }

   return (
      <div className={ s.login }>
         <h1>Sign In to continue</h1>
         <LoginForm onSubmit={onSubmit} />
      </div>
   )
}

export default Login
