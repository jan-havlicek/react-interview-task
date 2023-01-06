

export interface ReportConfig {
    id: string,
    name: string,
    componentIds: string[],
    tablesConfigs: ComparisonTableConfig[]
}

export interface ComparisonTableConfig {
    type: "comparison_table"
    timePeriodLast: string,
    timePeriodCurrent: string,
    measures: string[]
}

export interface ReportHeaderInfo {
    id: string,
    name: string
}
