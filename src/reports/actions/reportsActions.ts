
import type {Action} from '../../shared/store/actions';
import { ReportConfig } from '../types/reportConfig';
import { ComponentMeasuresData } from '../api/types/types';

export const AVAILABLE_REPORT_CONFIGS_REQUEST = 'reportconfig/REQUEST';
export const AVAILABLE_REPORT_CONFIGS_SUCCEEDED = 'reportconfig/SUCCEEDED';
export const REPORT_DATA_REQUEST = "report/DATA_REQUESTED";
export const REPORT_DATA_LOAD_SUCCEEDED = "report/DATA_LOAD_SUCCEEDED";
export const DISABLE_SECOND_REPORT = 'report/DISABLE_SECOND_REPORT';

export const availableReportConfigsRequest = (): Action => ({type: AVAILABLE_REPORT_CONFIGS_REQUEST, payload: null});

export const availableReportConfigsSucceeded = (reportConfigs: ReportConfig[]): Action<{ reportConfigs: ReportConfig[] }> => ({
    type: AVAILABLE_REPORT_CONFIGS_SUCCEEDED,
    payload: {reportConfigs}
});

export const requestReportData = (reportConfig: ReportConfig): Action<{ reportConfig: ReportConfig }> => ({
    type: REPORT_DATA_REQUEST,
    payload: {reportConfig}
});

export const reportDataLoadSucceeded = (reportData: ComponentMeasuresData): Action<{ reportData: ComponentMeasuresData }> => ({
    type: REPORT_DATA_LOAD_SUCCEEDED,
    payload: {reportData}
});
