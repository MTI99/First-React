import React from 'react'



export default function Contact() {
  return (
    <>

    <h2 className='font-bold text-4xl text-center my-5 py-5'>Contact Section</h2>
    <i className='fa-2x fa-solid fa-shake'></i>
     <form className='container mx-auto py-10 '>

        <div className='mb-4 w-1/2 m-auto'>
          <label htmlFor="userName" className="block mb-2 text-sm font-medium ">
            User name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>

        <div className='mb-4 w-1/2 m-auto'>
          <label htmlFor="userAge" className="block mb-2 text-sm font-medium ">
            Age
          </label>
          <input
            type="number"
            id="userAge"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Age"
            required
          />
        </div>

       
        
      
      <div className='mb-4 w-1/2 m-auto'>
        <label htmlFor="email" className="block mb-2 text-sm font-medium ">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>


      <div className='mb-4 w-1/2 m-auto'>
        <label htmlFor="password" className="block mb-2 text-sm font-medium ">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>


      <div className='mb-4 w-1/2 m-auto'>
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium ">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto block"
      >
        Submit
      </button>
    </form>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
