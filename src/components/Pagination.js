import React, { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationData = ({
  total = 40,
  itemsPerPage = 10,
  currentPageNo = 1,
  //onPageChange
}) => {
  const [totalPages, setTotalPages] = useState(0);

  const [currentPage, setCurrentPage] = useState(currentPageNo)
  

  const onPageChange =(i) =>{
    setCurrentPage(i)
  }

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    

    return pages;
  }, [totalPages, currentPage, onPageChange]);

  

  if (totalPages === 0) return null;

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationData
export {PaginationData}