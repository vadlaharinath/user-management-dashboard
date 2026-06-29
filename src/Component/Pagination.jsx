import React from "react";
import "../Styles/Pagination.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="pagination-container">

      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
      >
        Prev
      </button>

      <span className="page-number">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;