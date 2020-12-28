import React from 'react'
import s from './Login.module.css'
import { Form, Field } from 'react-final-form'
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router";

const Login = (props) => {
   const onSubmit = (formData) => {
      const {email, password, rememberMe} = formData
      props.login(email, password, rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to='profile'/>
   }

   return (
      <div className={ s.login }>
         <h1>Sign In to continue</h1>
         <LoginForm onSubmit={ onSubmit }/>
      </div>
   )
}

const LoginForm = (props) => {
   return (
      <Form onSubmit={ props.onSubmit }>
         { props => (
            <form onSubmit={ props.handleSubmit }>
               <div>
                  <Field placeholder='email' name='email' component='input'/>
               </div>
               <div>
                  <Field placeholder='password' name='password' component='input' type='password'/>
               </div>
               <div>
                  <label>
                     <Field name='rememberMe' component='input' type='checkbox'/>
                     Remember me
                  </label>
               </div>
               <div>
                  <button>Sign In</button>
               </div>
            </form>
         ) }
      </Form>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
