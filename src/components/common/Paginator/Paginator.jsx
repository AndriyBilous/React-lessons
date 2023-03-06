import React, { useState } from "react";
import styles from "./Paginator.module.css";
// import on from "classnames";

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // console.log("pages in beginning" + pages);

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  //  let pageee = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber);
  // console.log("pages: " + pages)
  // console.log("pages.filter : " + pageee);

  return <div className={styles.paginator}>
    {portionNumber > 1 && <div className={styles.pagePortionNumberButton_container}> <button onClick={() => setPortionNumber(portionNumber - 1)} className={styles.pagePortionNumberButton}>PREV</button></div>}
      <div className={styles.pagePortionNumber_container}>{pages
      .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
      .map((page) => {
        return (
          <span
            className={currentPage === page ? styles.selectedPage : "" + styles.pageNumber}
            key={page}
            onClick={(e) => onPageChanged(page)}
          >
            {page}
          </span>
        );
      })}
      </div>
      {portionCount > portionNumber && <div className={styles.pagePortionNumberButton_container}><button onClick={() => setPortionNumber(portionNumber + 1)} className={styles.pagePortionNumberButton}>NEXT</button></div>}
    </div>
};

export default Paginator;
