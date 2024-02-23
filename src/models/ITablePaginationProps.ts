export interface ITablePaginationProps {
    totalNumberofPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
