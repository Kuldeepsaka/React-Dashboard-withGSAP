import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import './style.scss'; // Ensure CSS is properly linked

const CommonTable = ({ columns, data, renderRow, sortableColumns = [] }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    } else {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
  });

  // Handle column sorting
  const handleSort = (columnKey) => {
    if (!sortableColumns.includes(columnKey)) return;
    setSortOrder(
      sortColumn === columnKey && sortOrder === 'asc' ? 'desc' : 'asc'
    );
    setSortColumn(columnKey);
  };

  // Get sorting icon
  const getSortIcon = (columnKey) => {
    if (sortColumn !== columnKey) return <FaSort />;
    return sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="table-container">
      <Table hover className="custom-table">
        <thead>
          <tr>
            {columns.map(({ label, key }, index) => (
              <th
                key={index}
                onClick={() => handleSort(key)}
                className={sortableColumns.includes(key) ? 'sortable' : ''}
              >
                {label} {sortableColumns.includes(key) && getSortIcon(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
