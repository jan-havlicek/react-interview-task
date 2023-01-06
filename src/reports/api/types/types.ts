export interface ComponentMeasures {
    created: number,
    componentId: string,
    timePeriodId: string,
    measures: {[key: string]: string}
}

export type ComponentMeasuresData = ComponentMeasures[];
