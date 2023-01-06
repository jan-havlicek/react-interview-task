import {call, put, takeLatest, select} from 'redux-saga/effects';
import { ComponentMeasuresData } from '../api/types/types';
import { REPORT_DATA_REQUEST, reportDataLoadSucceeded } from '../actions/reportsActions';

export default function* reportsSagas() {
    yield takeLatest(REPORT_DATA_REQUEST, requestReportData);
}

function* requestReportData() {
    yield put(reportDataLoadSucceeded(apiData));
}

const apiData: ComponentMeasuresData = [
    {
        "created": 1657271262927,
        "componentId": "dataflow-repository-connector",
        "timePeriodId": "week-1",
        "measures": {
            "coverage": "0.3",
            "minor_violations": "78",
            "duplicated_lines_density": "0.0",
            "code_smells": "226",
            "violations": "233",
            "critical_violations": "15",
            "blocker_violations": "0",
            "info_violations": "52",
            "bugs": "7",
            "major_violations": "89",
            "uncovered_lines": "4563",
            "cognitive_complexity": "1307",
            "duplicated_blocks": "0",
            "ncloc": "10953",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271262965,
        "componentId": "dataflow-repository-core",
        "timePeriodId": "week-2",
        "measures": {
            "coverage": "6.7",
            "minor_violations": "15",
            "duplicated_lines_density": "0.4",
            "code_smells": "75",
            "violations": "75",
            "critical_violations": "5",
            "blocker_violations": "1",
            "bugs": "0",
            "info_violations": "37",
            "major_violations": "18",
            "uncovered_lines": "1912",
            "cognitive_complexity": "404",
            "duplicated_blocks": "2",
            "ncloc": "5247",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271263003,
        "componentId": "dataflow-repository-dispatcher",
        "timePeriodId": "week-2",
        "measures": {
            "coverage": "33.5",
            "minor_violations": "14",
            "code_smells": "21",
            "duplicated_lines_density": "0.0",
            "violations": "21",
            "critical_violations": "7",
            "blocker_violations": "0",
            "bugs": "0",
            "info_violations": "2",
            "major_violations": "3",
            "uncovered_lines": "278",
            "cognitive_complexity": "104",
            "duplicated_blocks": "0",
            "ncloc": "2697",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271263040,
        "componentId": "dataflow-repository-dump",
        "timePeriodId": "week-1",
        "measures": {
            "coverage": "74.0",
            "minor_violations": "3",
            "code_smells": "14",
            "duplicated_lines_density": "0.0",
            "violations": "14",
            "critical_violations": "0",
            "blocker_violations": "0",
            "info_violations": "4",
            "bugs": "0",
            "major_violations": "7",
            "uncovered_lines": "99",
            "cognitive_complexity": "29",
            "duplicated_blocks": "0",
            "ncloc": "1566",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271467699,
        "componentId": "dataflow-repository-connector",
        "timePeriodId": "week-2",
        "measures": {
            "coverage": "0.3",
            "minor_violations": "76",
            "duplicated_lines_density": "0.0",
            "code_smells": "226",
            "violations": "233",
            "critical_violations": "13",
            "blocker_violations": "0",
            "bugs": "7",
            "info_violations": "53",
            "major_violations": "89",
            "uncovered_lines": "4563",
            "cognitive_complexity": "1307",
            "duplicated_blocks": "0",
            "ncloc": "10953",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271469792,
        "componentId": "dataflow-repository-core",
        "timePeriodId": "week-1",
        "measures": {
            "coverage": "6.7",
            "minor_violations": "15",
            "duplicated_lines_density": "0.4",
            "code_smells": "75",
            "violations": "75",
            "critical_violations": "4",
            "blocker_violations": "1",
            "info_violations": "37",
            "bugs": "0",
            "major_violations": "18",
            "uncovered_lines": "1912",
            "cognitive_complexity": "404",
            "duplicated_blocks": "2",
            "ncloc": "5247",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271469827,
        "componentId": "dataflow-repository-dispatcher",
        "timePeriodId": "week-1",
        "measures": {
            "coverage": "33.5",
            "minor_violations": "14",
            "code_smells": "21",
            "duplicated_lines_density": "0.0",
            "violations": "21",
            "critical_violations": "2",
            "blocker_violations": "0",
            "info_violations": "2",
            "bugs": "0",
            "major_violations": "3",
            "uncovered_lines": "278",
            "cognitive_complexity": "104",
            "duplicated_blocks": "0",
            "ncloc": "2697",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657271469867,
        "componentId": "dataflow-repository-dump",
        "timePeriodId": "week-3",
        "measures": {
            "coverage": "74.0",
            "minor_violations": "3",
            "code_smells": "14",
            "duplicated_lines_density": "0.0",
            "violations": "14",
            "critical_violations": "10",
            "blocker_violations": "0",
            "info_violations": "4",
            "bugs": "0",
            "major_violations": "7",
            "uncovered_lines": "99",
            "cognitive_complexity": "29",
            "duplicated_blocks": "0",
            "ncloc": "1566",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657272019133,
        "componentId": "dataflow-repository-connector",
        "timePeriodId": "week-3",
        "measures": {
            "coverage": "0.3",
            "minor_violations": "76",
            "code_smells": "226",
            "duplicated_lines_density": "0.0",
            "violations": "233",
            "critical_violations": "15",
            "blocker_violations": "0",
            "info_violations": "53",
            "bugs": "7",
            "major_violations": "89",
            "uncovered_lines": "4563",
            "cognitive_complexity": "1307",
            "duplicated_blocks": "0",
            "ncloc": "10953",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657272019172,
        "componentId": "dataflow-repository-core",
        "timePeriodId": "week-3",
        "measures": {
            "coverage": "6.7",
            "minor_violations": "15",
            "code_smells": "75",
            "duplicated_lines_density": "0.4",
            "violations": "75",
            "critical_violations": "4",
            "blocker_violations": "0",
            "bugs": "0",
            "info_violations": "37",
            "major_violations": "18",
            "uncovered_lines": "1912",
            "cognitive_complexity": "404",
            "duplicated_blocks": "2",
            "ncloc": "5247",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657272019212,
        "componentId": "dataflow-repository-dispatcher",
        "timePeriodId": "week-3",
        "measures": {
            "coverage": "33.5",
            "minor_violations": "14",
            "code_smells": "21",
            "duplicated_lines_density": "0.0",
            "violations": "21",
            "critical_violations": "2",
            "blocker_violations": "0",
            "bugs": "0",
            "info_violations": "2",
            "major_violations": "3",
            "uncovered_lines": "278",
            "cognitive_complexity": "104",
            "duplicated_blocks": "0",
            "ncloc": "2697",
            "vulnerabilities": "0"
        }
    },
    {
        "created": 1657272019256,
        "componentId": "dataflow-repository-dump",
        "timePeriodId": "week-2",
        "measures": {
            "coverage": "74.0",
            "minor_violations": "3",
            "code_smells": "14",
            "duplicated_lines_density": "0.0",
            "violations": "14",
            "critical_violations": "0",
            "blocker_violations": "0",
            "info_violations": "4",
            "bugs": "0",
            "major_violations": "7",
            "uncovered_lines": "99",
            "cognitive_complexity": "29",
            "duplicated_blocks": "0",
            "ncloc": "1566",
            "vulnerabilities": "0"
        }
    }
]