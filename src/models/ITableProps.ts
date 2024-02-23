export interface ITableData {
    headers: {
        key: string;
        title: string;
        dataIndex: string;
        sortable?: boolean;
        align?: "left" | "center" | "right";
        widthPercentage?: number;
        customComponent?: (data: any) => JSX.Element;
    }[];
    data: {
        [key: string]: any;
        expandContent?: {
            type: string;
            name: string;
            table?: ITableData;
        };
    }[];
}
export interface ITableProps {
    tableData: ITableData;
}
