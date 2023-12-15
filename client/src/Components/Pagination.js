import React from 'react'
import './Pagination.css'
const Pagination = ({totalGames,gamesPerPage,setCurrentPage,currentPage}) => {
    let pages = [];

    for(let i= 1; i<=Math.ceil(totalGames/gamesPerPage);i++)
    {
      pages.push(i);
    }
  return (
    <div className='Pagination'>
        {pages.map((page,index)=>{
            return <button class="btn btn-primary" key={index}onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
        })}
    </div>
  )
}

export default Pagination
