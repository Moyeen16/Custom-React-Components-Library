import React from "react";
// import "./styles.css";
import styles from "./styles.module.css";
import TablePagination from "./TablePagination";
import { ITableProps } from "../../models/ITableProps";

const Table = (props: ITableProps) => {
    const { tableData } = props;
    const [sortBy, setSortBy] = React.useState<string>("");
    const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [expandedRow, setExpandedRow] = React.useState<number>();
    const itemsPerPage = props.pagination
        ? props.pageSize ?? 10
        : tableData.data.length;
    const totalNumberOfPages = Math.ceil(tableData.data.length / itemsPerPage);

    // Sorting function
    const sortedData = tableData.data.sort((a: any, b: any) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const handleSort = (key: string) => {
        if (sortBy === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(key);
            setSortOrder("asc");
        }
    };
    const handleExpand = (rowIndex: number) => {
        setExpandedRow(rowIndex === expandedRow ? undefined : rowIndex); // Toggle expand/collapse
    };
    return (
        <div className={`${styles["table-container"]} p-2 rounded-md bg-white`}>
            <table className="w-full h-full border-spacing-0 scroll-smooth rounded-md">
                <thead>
                    <tr>
                        {tableData.headers.map((header, idx) => (
                            <th
                                className="font-semibold text-sm py-2 px-4 text-left border-b-2 border-table-accent text-table-text-header top-0 sticky bg-white"
                                key={idx}
                                onClick={() =>
                                    header.sortable && handleSort(header.key)
                                }
                                style={
                                    header.sortable
                                        ? {
                                              cursor: "pointer",
                                              width: header.widthPercentage
                                                  ? `${header.widthPercentage}%`
                                                  : "auto",
                                              zIndex: "999",
                                          }
                                        : {
                                              width: header.widthPercentage
                                                  ? `${header.widthPercentage}%`
                                                  : "auto",
                                              zIndex: "999",
                                          }
                                }
                            >
                                {header.title}{" "}
                                {sortBy !== header.key &&
                                    header.sortable &&
                                    "↑↓"}
                                {sortBy === header.key &&
                                    (sortOrder === "asc" ? "↑" : "↓")}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item: any, idx: number) => (
                        <>
                            <tr
                                key={idx}
                                className={` ${
                                    expandedRow === idx
                                        ? "border border-table-accent border-b-0 rounded-full"
                                        : ""
                                }`}
                            >
                                {tableData.headers.map((header, idx2) => (
                                    <td
                                        className={`text-sm font-normal py-3 px-4 leading-4 text-table-text-body`}
                                        key={idx2}
                                        style={{
                                            textAlign: header.align || "left",
                                        }}
                                    >
                                        {header.customComponent ? (
                                            header.customComponent(
                                                item[header.dataIndex]
                                            )
                                        ) : header.dataIndex ===
                                          "expandArrow" ? (
                                            <div
                                                className="cursor-pointer text-xl transition-all duration-500 ease-linear flex items-center justify-center"
                                                style={{
                                                    rotate:
                                                        expandedRow === idx
                                                            ? "270deg"
                                                            : "90deg",
                                                }}
                                                onClick={() =>
                                                    handleExpand(idx)
                                                }
                                            >
                                                &#8250;
                                            </div>
                                        ) : (
                                            item[header.dataIndex]
                                        )}
                                    </td>
                                ))}
                            </tr>
                            {expandedRow === idx && item.expandContent && (
                                <>
                                    <tr />
                                    <tr className="border border-table-accent border-t-0 rounded-full">
                                        {/* Render your expanded row content here */}
                                        <td
                                            colSpan={tableData.headers.length}
                                            className="p-4"
                                        >
                                            <div className="text-table-accent text-base font-medium py-2 border-t border-table-pagination-border">
                                                {item.expandContent?.name}
                                            </div>
                                            {item.expandContent?.type ===
                                                "table" && (
                                                <div
                                                    className={`${styles["nested-table"]}`}
                                                >
                                                    <Table
                                                        tableData={
                                                            item.expandContent
                                                                ?.table
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                </>
                            )}
                        </>
                    ))}
                </tbody>
            </table>

            {props.pagination && (
                <TablePagination
                    currentPage={currentPage}
                    totalNumberofPages={totalNumberOfPages}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default Table;
