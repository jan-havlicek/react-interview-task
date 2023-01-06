import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ComparisonTableData, ReportsState } from './reducers/reportsReducer';
import { useEffect } from 'react';
import { requestReportData } from './actions/reportsActions';

function shouldInitializeReport(reportId: string, reportsState: ReportsState) {
    return !reportsState.report || reportsState.report.id !== reportId;
}

function ReportDetailPage() {
    const params: any = useParams();
    const reportId = params.id;
    const reportsState = useSelector((state: { reports: ReportsState }) => state.reports);
    console.log(reportsState);
    const dispatch = useDispatch();

    const reportConfig = reportsState.availableReportConfigs.find((config :any) => config.id === reportId)
    const isReportConfigAvailable = reportConfig !== undefined;

    useEffect(() => {
        if (isReportConfigAvailable && shouldInitializeReport(reportId, reportsState)) {
            dispatch(requestReportData(reportConfig))
        }
    });

    return (<>
        {!isReportConfigAvailable && <strong>Requested report is not available</strong>}
        {isReportConfigAvailable && <>
            <h2>Report detail {reportId}</h2>

            <>
                {reportsState.report?.tablesData.map((tablesData: ComparisonTableData) => (<>
                    <h3>Comparison table</h3>
                    <table style={{borderWidth: 1, borderColor: 'gray', borderStyle: 'solid'}}>
                        <tr>
                            <th style={{fontFamily: 'Arial', fontSize: 20, width: 400, textAlign: 'left'}}>Measure</th>
                            <th style={{fontFamily: 'Arial', fontSize: 20}}>Last value</th>
                            <th style={{fontFamily: 'Arial', fontSize: 20}}>New value</th>
                            <th style={{fontFamily: 'Arial', fontSize: 20}}>Difference</th>
                            <th style={{fontFamily: 'Arial', fontSize: 20}}>Difference [%]</th>
                        </tr>
                        {tablesData.map(measureData => (
                            <tr>
                                <td>{measureData.measure}</td>
                                <td>{measureData.lastPeriodValue}</td>
                                <td>{measureData.currentPeriodValue}</td>
                                <td style={getStyle(measureData.difference)}>{measureData.difference}</td>
                                <td>{measureData.relativeDifference}</td>
                            </tr>
                        ))}
                    </table>
                </>))}
            </>
        </>}
    </>);
}

function getStyle(difference: number) {
    if (difference > 0) {
        return {backgroundColor: "#00FF00"}
    } else if (difference < 0) {
        return {backgroundColor: "#FF0000"}
    } else return {}
}

export default ReportDetailPage;
