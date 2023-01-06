import { ReportConfig } from '../types/reportConfig';
import { ComponentMeasuresData } from '../api/types/types';
import { DISABLE_SECOND_REPORT, REPORT_DATA_LOAD_SUCCEEDED, REPORT_DATA_REQUEST } from '../actions/reportsActions';

export interface ReportsState {
    availableReportConfigs: ReportConfig[],
    report?: ReportState
}

export type ComparisonTableData = ComparisonTableRow[];

export interface ComparisonTableRow {
    measure: string, // name of the measure
    lastPeriodValue: number, // value for the last time period, sum for all components
    currentPeriodValue: number, // value for the current time period, sum for all components
    difference: number, // difference between old and new value
    relativeDifference: number // difference between old and new value divided by the old value - represented in percents [%]
}

export interface ReportState {
    id: string
    rawData: ComponentMeasuresData,
    tablesData: ComparisonTableData[],
}

const initialState: ReportsState = {
    availableReportConfigs: [{
        id: "metadata",
        name: "Metadata Report",
        componentIds: ["componentIds=dataflow-repository-connector", "dataflow-repository-core", "dataflow-repository-dispatcher", "dataflow-repository-dump"],
        tablesConfigs: [{
            type: "comparison_table",
            timePeriodLast: "week-2",
            timePeriodCurrent: "week-3",
            measures: ["blocker_violations", "critical_violations", "major_violations", "ncloc"]
        }, {
            type: "comparison_table",
            timePeriodLast: "week-1",
            timePeriodCurrent: "2022-07-30",
            measures: ["blocker_violations", "critical_violations", "major_violations", "ncloc"]
        }, {
            type: "comparison_table",
            timePeriodLast: "week-2",
            timePeriodCurrent: "week-3",
            measures: ["minor_violations", "info_violations"]
        }]
    },
        {
            id: "reporting-team",
            name: "Reporting team Report",
            componentIds: ["manta-connector-kafka", "manta-connector-ssis"],
            tablesConfigs: []
        }]
};

export const filterMeasures = (measuresObject: {[key: string]: string}, selectedMeasures: string[]): {measure: string, value: string}[] => {
    // TODO Implement filtering required measures
    // START IMPLEMENTATION
    // END IMPLEMENTATION
}

const reportsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REPORT_DATA_REQUEST:
            return {
                ...state,
                report: {
                    id: action.payload.reportConfig.id,
                    rawData: [],
                    tablesData: []
                }
            };
        case REPORT_DATA_LOAD_SUCCEEDED:
            const payloadData: ComponentMeasuresData = action.payload.reportData;

            const reportId = state.report?.id;
            const reportConfig = state.availableReportConfigs.find(config => config.id === reportId);

            if(!reportConfig?.tablesConfigs) {
                throw Error("Report config was not found");
            }

            // TODO Implement a reducer
            // The reducer takes the payload data (variable "payloadData") and
            // 1. stores into the state property rawData (already implemented)
            // 2. creates report data that correspond to the report configuration
            // It is necessary to go through the report configuration (variable reportConfig).
            // It defines configuration of multiple comparison tables. Based on its configuration it is necessary
            // to modify data received from API to the structure required by the comparison tables
            // * For each report it is necessary to filter data based on time period (defined in the configuration)
            // * It is necessary to filter just measures required by the report
            // * Comparison table displays sum of all values for each measure across all components (just sum the values)

            // You can use `filterMeasures` helper function
            // You may find handy Object.entries() and Object.values() functions

            const tablesData = reportConfig.tablesConfigs.map(config => {

                // START OF THE IMPLEMENTATION
                // END OF THE IMPLEMENTATION
            });

            return {
                ...state,
                report: {
                    ...state.report,
                    rawData: payloadData,
                    tablesData
                }
            }
        default:
            return state;
    }
};

export default reportsReducer;
