import React from 'react';
import { usePagination, DOTS } from '../hooks/usePagination';

export  const Pagination = (props: any) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <ul
            className="pagination-list"
        >
            <li
                className=""
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange && paginationRange.map((pageNumber: number | string, index: number) => {
                if (pageNumber === DOTS) {
                    return <li key={index}  className="pagination-link pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        key={index}
                        className={`pagination-link ${pageNumber === currentPage ? "is-current" : ""}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className="pagination-link"
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};
