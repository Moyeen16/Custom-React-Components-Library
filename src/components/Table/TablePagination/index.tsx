// import "./styles.css";
import React from "react";
import { AngleLeft } from "@styled-icons/fa-solid/AngleLeft";
import { AngleRight } from "@styled-icons/fa-solid/AngleRight";

interface ITablePaginationProps {
    totalNumberofPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const TablePagination = (props: ITablePaginationProps) => {
    const { totalNumberofPages, currentPage, setCurrentPage } = props;
    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalNumberofPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    const renderPageNumbers = () => {
        const pageNumbers = getPageNumbers();
        const maxPageLinks = 10; // Adjust this to your preference

        if (pageNumbers.length <= maxPageLinks) {
            return pageNumbers.map((pageNumber) => (
                <span
                    key={pageNumber}
                    className={
                        pageNumber === Number(currentPage)
                            ? "cursor-pointer mx-2 mb-1 text-md text-table-pagination-text-pgSelected font-semibold underline"
                            : "cursor-pointer mx-2 mb-1 text-md text-table-pagination-text-pg font-normal"
                    }
                    onClick={() => setCurrentPage(pageNumber)}
                >
                    {pageNumber}
                </span>
            ));
        } else {
            // Logic to display a subset of page links with "..." for navigation
            const pageLinks = [];
            if (currentPage >= 1) {
                pageLinks.push(1);
            }
            if (currentPage > 4) {
                pageLinks.push("...");
            }
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                if (i > 1 && i < totalNumberofPages) {
                    pageLinks.push(i);
                }
            }
            if (currentPage < totalNumberofPages - 3) {
                pageLinks.push("...");
            }
            if (currentPage <= totalNumberofPages) {
                pageLinks.push(totalNumberofPages);
            }

            return pageLinks.map((pageLink, index) => (
                <span
                    key={index}
                    className={
                        pageLink === "..."
                            ? "my-auto ml-1"
                            : pageLink === Number(currentPage)
                            ? "cursor-pointer mx-2 mb-1 text-md text-table-pagination-text-pgSelected font-semibold underline"
                            : "cursor-pointer mx-2 mb-1 text-md text-table-pagination-text-pg font-normal"
                    }
                    onClick={() => {
                        if (pageLink !== "...") {
                            setCurrentPage(Number(pageLink));
                        }
                    }}
                >
                    {pageLink}
                </span>
            ));
        }
    };
    return (
        <div className="w-full flex items-center justify-end pt-1 flex-wrap border-t border-table-accent">
            {totalNumberofPages > 1 && (
                <>
                    <span
                        onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        className={`text-xs cursor-pointer mr-1 mb-1 text-table-pagination-text h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 ${
                            currentPage === 1
                                ? "cursor-not-allowed text-table-pagination-text-disabled bg-table-pagination-bg-disbaled  border-table-pagination-border-disabled"
                                : "hover:bg-table-pagination-bg-hover hover:border-table-pagination-border-hover border-table-pagination-border hover:text-table-pagination-text-hover"
                        }`}
                    >
                        <AngleLeft size={12} />
                    </span>
                    {renderPageNumbers()}
                    <span
                        onClick={() =>
                            setCurrentPage(
                                Math.min(totalNumberofPages, currentPage + 1)
                            )
                        }
                        className={`text-xs cursor-pointer ml-2 mb-1 text-table-pagination-text h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 ${
                            currentPage === totalNumberofPages
                                ? "cursor-not-allowed text-table-pagination-text-disabled bg-table-pagination-bg-disbaled border-table-pagination-border-disabled"
                                : "hover:bg-table-pagination-bg-hover hover:border-table-pagination-border-hover border-table-pagination-border hover:text-table-pagination-text-hover"
                        }`}
                    >
                        <AngleRight size={12} />
                    </span>
                </>
            )}
        </div>
    );
};

export default TablePagination;
