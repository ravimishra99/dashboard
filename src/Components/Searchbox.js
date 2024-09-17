import React from 'react'
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div className='search-box'>
      <div className='search'>
        <input type='text'
          placeholder='Search by Client Name or ID' className='input' />
      </div>
      <div>
        <button>New Job Sheet</button>
      </div>



    </div>
  )
}

export default Searchbox