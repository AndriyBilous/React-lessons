import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
      {pages.map((page) => {
        return (
          <span
            className={currentPage === page ? styles.selectedPage : ""}
            key={page}
            onClick={(e) => onPageChanged(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
};

export default Paginator;
