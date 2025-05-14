import React from 'react'

const Filter = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto '">
  {/* <label for="countries" className="block mb-2 font-medium text-gray-900 dark:text-white">Select an option</label> */}
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected className='text-xl' >Price range</option>
    <option value="US">10$</option>
    <option value="CA">20$</option>
    <option value="FR">40$</option>
    <option value="DE">50$</option>
  </select>
</form>
    </div>
  )
}

export default Filter
