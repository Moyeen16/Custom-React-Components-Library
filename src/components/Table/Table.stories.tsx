import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "./index";
import { ITableData, ITableProps } from "../../models/ITableProps";
import ProgressBar from "../ProgressBar";
import Tag from "../Tag";
const meta = {
    title: "Table",
    component: Table,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const SimpleTable = (args: ITableProps) => {
    const testData: ITableData = {
        headers: [
            {
                key: "measure",
                title: "MEASURE",
                dataIndex: "measure",
                sortable: true,
            },
            {
                key: "provider",
                title: "PROVIDER",
                dataIndex: "provider",
            },
            {
                key: "performance",
                title: "PERFORMANCE",
                dataIndex: "performance",
                sortable: true,
                customComponent: (data: number) => (
                    <ProgressBar
                        showPercentage
                        completedPercent={data}
                        bgColor={"#9249B2"}
                    />
                ),
                widthPercentage: 20,
            },
            {
                key: "num",
                title: "NUM",
                dataIndex: "num",
                align: "right",
            },
            {
                key: "den",
                title: "DEN",
                dataIndex: "den",
                align: "right",
            },
            {
                key: "exc",
                title: "EXC",
                dataIndex: "exc",
                align: "right",
            },
        ],
        data: [
            {
                measure: "All Measures",
                provider: "All Providers",
                performance: 60.96,
                num: 2486,
                den: 4078,
                exc: 42,
            },
            {
                measure:
                    "Glycemic Status Assessment for Patients With Diabetes",
                provider: "All Providers",
                performance: 72.91,
                num: 68,
                den: 131,
                exc: 2,
            },
            {
                measure: "Controlling High Blood Pressure",
                provider: "All Providers",
                performance: 20.0,
                num: 150,
                den: 250,
                exc: 0,
            },
            {
                measure:
                    "Screening for Clinical Depression and Follow-Up Plan (CMS or Best Insurance-modified CMS)",
                provider: "All Providers",
                performance: 39.07,
                num: 59,
                den: 151,
                exc: 7,
            },
            {
                measure: "Substance Use Assessment in Primary Care",
                provider: "All Providers",
                performance: 31.13,
                num: 47,
                den: 151,
                exc: 7,
            },
            {
                measure: "Asthma Medication Ratio",
                provider: "All Providers",
                performance: 66.67,
                num: 60,
                den: 90,
                exc: 0,
            },
        ],
    };
    return (
        <div style={{ width: "900px" }}>
            <Table tableData={testData} />
        </div>
    );
};
SimpleTable.args = {};
export const TableWithNestedTable = (args: ITableProps) => {
    const testData: ITableData = {
        headers: [
            {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sortable: true,
                widthPercentage: 15,
                customComponent: (data) => <a>{data}</a>,
            },
            {
                key: "dob",
                title: "DOB",
                dataIndex: "dob",
                widthPercentage: 12,
            },
            {
                key: "memberId",
                title: "MEMBER ID",
                dataIndex: "memberId",
                sortable: true,
                widthPercentage: 13,
            },
            {
                key: "attributedProvider",
                title: "ATTRIBUTED PROVIDER",
                dataIndex: "attributedProvider",
                widthPercentage: 20,
            },
            {
                key: "measure",
                title: "MEASURE",
                dataIndex: "measure",
                widthPercentage: 25,
            },
            {
                key: "result",
                title: "RESULT",
                dataIndex: "result",
                customComponent: (data) => (
                    <Tag
                        error={data === "Not Met"}
                        success={data === "Met"}
                        text={data}
                    />
                ),
                widthPercentage: 12,
            },
            {
                key: "expandArrow",
                title: "",
                dataIndex: "expandArrow",
                widthPercentage: 3,
            },
        ],
        data: [
            {
                name: "Joseph , Ada M",
                dob: "Jan 1, 1945",
                memberId: "XY12345678",
                attributedProvider: "Reyes, Nancy, MD",
                measure:
                    "Medication Adherence - Proportion of Days Covered: Statins",
                result: "Met",
                expandContent: {
                    name: "Measure Evidence",
                    type: "table",
                    table: {
                        headers: [
                            {
                                key: "prescriber",
                                title: "PRESCRIBER",
                                dataIndex: "prescriber",
                                sortable: true,
                            },
                            {
                                key: "medication",
                                title: "MEDICATION",
                                dataIndex: "medication",
                                sortable: true,
                            },
                            {
                                key: "fillQuantity",
                                title: "FILL QUANTITY",
                                dataIndex: "fillQuantity",
                                sortable: true,
                            },
                            {
                                key: "lastFill",
                                title: "LAST FILL",
                                dataIndex: "lastFill",
                                sortable: true,
                            },
                            {
                                key: "fillPharmacy",
                                title: "FILL PHARMACY",
                                dataIndex: "fillPharmacy",
                                sortable: true,
                            },
                        ],
                        data: [
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 36,
                                lastFill: "Aug 17, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Pravastatin Tab 80 mg",
                                fillQuantity: 0,
                                lastFill: "Aug 24, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 0,
                                lastFill: "Aug 6, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 7,
                                lastFill: "Aug 2, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                        ],
                    },
                },
            },
            {
                name: "Inez, Eliot S",
                dob: "Jan 15, 1968",
                memberId: "XY12345678",
                attributedProvider: "Reyes, Nancy, MD",
                measure:
                    "Medication Adherence - Proportion of Days Covered: Statins",
                result: "Not Met",
                expandContent: {
                    name: "Measure Evidence",
                    type: "table",
                    table: {
                        headers: [
                            {
                                key: "prescriber",
                                title: "PRESCRIBER",
                                dataIndex: "prescriber",
                                sortable: true,
                            },
                            {
                                key: "medication",
                                title: "MEDICATION",
                                dataIndex: "medication",
                                sortable: true,
                            },
                            {
                                key: "fillQuantity",
                                title: "FILL QUANTITY",
                                dataIndex: "fillQuantity",
                                sortable: true,
                            },
                            {
                                key: "lastFill",
                                title: "LAST FILL",
                                dataIndex: "lastFill",
                                sortable: true,
                            },
                            {
                                key: "fillPharmacy",
                                title: "FILL PHARMACY",
                                dataIndex: "fillPharmacy",
                                sortable: true,
                            },
                        ],
                        data: [
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Pravastatin Tab 80 mg",
                                fillQuantity: 0,
                                lastFill: "Aug 24, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 0,
                                lastFill: "Aug 6, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 7,
                                lastFill: "Aug 2, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                        ],
                    },
                },
            },
            {
                name: "Chen Victor",
                dob: "Mar 1, 1965",
                memberId: "XY12345678",
                attributedProvider: "Reyes, Nancy, MD",
                measure:
                    "Medication Adherence - Proportion of Days Covered: Statins",
                result: "Met",
                expandContent: {
                    name: "Measure Evidence",
                    type: "table",
                    table: {
                        headers: [
                            {
                                key: "prescriber",
                                title: "PRESCRIBER",
                                dataIndex: "prescriber",
                                sortable: true,
                            },
                            {
                                key: "medication",
                                title: "MEDICATION",
                                dataIndex: "medication",
                                sortable: true,
                            },
                            {
                                key: "fillQuantity",
                                title: "FILL QUANTITY",
                                dataIndex: "fillQuantity",
                                sortable: true,
                            },
                            {
                                key: "lastFill",
                                title: "LAST FILL",
                                dataIndex: "lastFill",
                                sortable: true,
                            },
                            {
                                key: "fillPharmacy",
                                title: "FILL PHARMACY",
                                dataIndex: "fillPharmacy",
                                sortable: true,
                            },
                        ],
                        data: [
                            {
                                prescriber: "Reyes, Nancy, MD",
                                medication: "Atorvastatin Tab 80 mg",
                                fillQuantity: 7,
                                lastFill: "Aug 2, 2022",
                                fillPharmacy: "ABC Pharmacy",
                            },
                        ],
                    },
                },
            },
        ],
    };
    return (
        <div style={{ width: "900px" }}>
            <Table tableData={testData} />
        </div>
    );
};
TableWithNestedTable.args = {};
