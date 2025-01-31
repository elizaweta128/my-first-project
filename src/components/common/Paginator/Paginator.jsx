import React, {useState} from "react";
import s from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] =useState(1);
    let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            {
                portionNumber > 1  ?
                    <button className={s.paginationButton} onClick={() => setPortionNumber(portionNumber-1)}>PREV</button> :
                    undefined
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => (
                <span key={page} onClick={() => {
                   onPageChanged(page)
                }}
                      className={`${s.page} ${currentPage === page ? s.selectedPage : ''}`}>{page}</span>
            ))}
            {
                portionCount > portionNumber  ?
                    <button className={s.paginationButton} onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button> :
                    undefined
            }
        </div>
    )
}


export default Paginator;