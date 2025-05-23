import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../component/common/table/style.scss';

const TablePagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
  currentItems,
}) => {
  const renderPaginationItems = () => {
    const pageItems = [];

    if (totalPages <= 4) {
      // If total pages are 4 or less, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      // Always show first page
      pageItems.push(
        <Pagination.Item
          key={1}
          active={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          1
        </Pagination.Item>
      );

      if (currentPage > 3) {
        // Show "..." after the first page if the current page is greater than 3
        pageItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }

      // Determine range of pages to show around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }

      if (currentPage < totalPages - 2) {
        // Show "..." before the last page if the current page is far from the last page
        pageItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }

      // Always show the last page
      pageItems.push(
        <Pagination.Item
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return pageItems;
  };

  return (
    <div className="pagination-container d-flex flex-wrap align-items-center justify-content-between">
      {/* Items Count Info */}
      <div className="pagination-info col-auto">
        Showing {currentItems} items out of {totalItems} results found
      </div>

      {/* Pagination UI */}
      <Pagination className="custom-pagination col-auto">
        {/* Previous Button with Custom Icon */}
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src="/icons/prev.svg" alt="Prev" width="16" height="9" />
        </Pagination.Prev>

        {/* Render Pagination Items */}
        {renderPaginationItems()}

        {/* Next Button with Custom Icon */}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <img src="/icons/next.svg" alt="Next" width="16" height="9" />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default TablePagination;
