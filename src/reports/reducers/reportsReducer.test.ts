import { ComponentMeasuresData } from '../api/types/types';
import reportsReducer, { ComparisonTableData, ReportsState } from './reportsReducer';
import { reportDataLoadSucceeded } from '../actions/reportsActions';

it('returns report for given table configuration', () => {
    // arrange
    const reportsState: ReportsState = {
        availableReportConfigs: [{
            id: "metadata",
            name: "Metadata Report",
            componentIds: ["dataflow-repository-connector", "dataflow-repository-core"],
            tablesConfigs: [{
                type: "comparison_table",
                timePeriodLast: "week-2",
                timePeriodCurrent: "week-3",
                measures: ["critical_violations", "blocker_violations", "major_violations", "ncloc"]
            }, {
                type: "comparison_table",
                timePeriodLast: "week-1",
                timePeriodCurrent: "week-2",
                measures: ["minor_violations", "info_violations", "ncloc"]
            }]
        }],
        report: {
            id: "metadata",
            rawData: [],
            tablesData: []
        }
    }
    // expected
    const expectedComparisonTablesData: ComparisonTableData[] = [
        [ // comparison table 1 for timePeriodLast: "week-2", timePeriodCurrent: "week-3",
            {measure: "critical_violations", lastPeriodValue: 20, currentPeriodValue: 19, difference: -1, relativeDifference: -5},
            {measure: "blocker_violations", lastPeriodValue: 5, currentPeriodValue: 1, difference: -4, relativeDifference: -80},
            {measure: "major_violations", lastPeriodValue: 107, currentPeriodValue: 107, difference: 0, relativeDifference: 0},
            {measure: "ncloc", lastPeriodValue: 16242, currentPeriodValue: 17701, difference: 1459, relativeDifference: 8.982883881295407},
        ],
        [ // comparison table 2 for timePeriodLast: "week-1", timePeriodCurrent: "week-2",
            {measure: "minor_violations", lastPeriodValue: 90, currentPeriodValue: 93, difference: 3, relativeDifference: 3.3333333333333335},
            {measure: "info_violations", lastPeriodValue: 102, currentPeriodValue: 89, difference: -13, relativeDifference: -12.745098039215685},
            {measure: "ncloc", lastPeriodValue: 17160, currentPeriodValue: 16242, difference: -918, relativeDifference: -5.34965034965035},
        ]
    ];

    // act
    const action = reportDataLoadSucceeded(apiData);
    const newState = reportsReducer(reportsState, action)
    const newTablesData = newState.report?.tablesData;
    expect(newTablesData).toEqual(expectedComparisonTablesData);
});

const apiData: ComponentMeasuresData = [
    {
        'created': 1657271262927,
        'componentId': 'dataflow-repository-connector',
        'timePeriodId': 'week-1',
        'measures': {
            'coverage': '0.45',
            'minor_violations': '70',
            'duplicated_lines_density': '0.0',
            'code_smells': '226',
            'violations': '233',
            'critical_violations': '20',
            'blocker_violations': '4',
            'info_violations': '52',
            'bugs': '7',
            'major_violations': '89',
            'uncovered_lines': '4563',
            'cognitive_complexity': '1307',
            'duplicated_blocks': '0',
            'ncloc': '11913',
            'vulnerabilities': '0'
        }
    },
    {
        'created': 1657271262927,
        'componentId': 'dataflow-repository-connector',
        'timePeriodId': 'week-2',
        'measures': {
            'coverage': '0.3',
            'minor_violations': '78',
            'duplicated_lines_density': '0.0',
            'code_smells': '226',
            'violations': '233',
            'critical_violations': '15',
            'blocker_violations': '4',
            'info_violations': '52',
            'bugs': '7',
            'major_violations': '89',
            'uncovered_lines': '4563',
            'cognitive_complexity': '1307',
            'duplicated_blocks': '0',
            'ncloc': '10953',
            'vulnerabilities': '0'
        }
    },
    {
        'created': 1657271262927,
        'componentId': 'dataflow-repository-connector',
        'timePeriodId': 'week-3',
        'measures': {
            'coverage': '0.7',
            'minor_violations': '78',
            'duplicated_lines_density': '0.0',
            'code_smells': '226',
            'violations': '233',
            'critical_violations': '15',
            'blocker_violations': '0',
            'info_violations': '44',
            'bugs': '4',
            'major_violations': '89',
            'uncovered_lines': '4563',
            'cognitive_complexity': '1307',
            'duplicated_blocks': '0',
            'ncloc': '12454',
            'vulnerabilities': '0'
        }
    },
    {
        'created': 1657271262965,
        'componentId': 'dataflow-repository-core',
        'timePeriodId': 'week-1',
        'measures': {
            'coverage': '6.7',
            'minor_violations': '20',
            'duplicated_lines_density': '0.4',
            'code_smells': '75',
            'violations': '75',
            'critical_violations': '5',
            'blocker_violations': '1',
            'bugs': '0',
            'info_violations': '50',
            'major_violations': '18',
            'uncovered_lines': '1912',
            'cognitive_complexity': '404',
            'duplicated_blocks': '2',
            'ncloc': '5247',
            'vulnerabilities': '0'
        }
    },
    {
        'created': 1657271262965,
        'componentId': 'dataflow-repository-core',
        'timePeriodId': 'week-2',
        'measures': {
            'coverage': '6.7',
            'minor_violations': '15',
            'duplicated_lines_density': '0.4',
            'code_smells': '75',
            'violations': '75',
            'critical_violations': '5',
            'blocker_violations': '1',
            'bugs': '0',
            'info_violations': '37',
            'major_violations': '18',
            'uncovered_lines': '1912',
            'cognitive_complexity': '404',
            'duplicated_blocks': '2',
            'ncloc': '5289',
            'vulnerabilities': '0'
        }
    },
    {
        'created': 1657271262965,
        'componentId': 'dataflow-repository-core',
        'timePeriodId': 'week-3',
        'measures': {
            'coverage': '6.7',
            'minor_violations': '15',
            'duplicated_lines_density': '0.4',
            'code_smells': '75',
            'violations': '75',
            'critical_violations': '4',
            'blocker_violations': '1',
            'bugs': '0',
            'info_violations': '38',
            'major_violations': '18',
            'uncovered_lines': '1912',
            'cognitive_complexity': '404',
            'duplicated_blocks': '2',
            'ncloc': '5247',
            'vulnerabilities': '0'
        }
    }];
