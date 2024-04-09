import React, { useState } from 'react'
import { registration } from './utilities/axios-api';
import {Link} from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        try {
            const response = await registration(email , password);
            if(response && response.token){
                
            }   
        } catch (error) {
         
        }
      
    }

  return (
    <div>
      <section >
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
      <div className="w-full bg-white  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-gray-900">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">Your email</label>
                      <input value={email}
                 onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="pl-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="pl-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="pl-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                  </div>
                 
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create an account</button>
                  <p className=" text-center text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        <Link to='/'>Login here</Link>
                        </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignUp
