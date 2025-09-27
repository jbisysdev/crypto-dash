import React from 'react';
import { FaBan } from "react-icons/fa6";

const EmptySearchResults = () => {
  return (
    <div className="empty-search-results">
        <FaBan className='banned'/>
        <h3>Nothing matches the search...</h3>
    </div>
  )
}

export default EmptySearchResults