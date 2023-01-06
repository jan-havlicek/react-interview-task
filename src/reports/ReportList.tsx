import React from 'react';
import { ReportHeaderInfo } from './types/reportConfig';
import { Link } from 'react-router-dom';

type Props = {
    reportsHeaderInfo: ReportHeaderInfo[],
    currentReportId?: string,
}

export default function ReportList(props: Props) {
    return (
        <ul>
            {props.reportsHeaderInfo.map(reportHeaderInfo => <li key={reportHeaderInfo.id}>
                <Link to={`/report/${reportHeaderInfo.id}`}>{reportHeaderInfo.name}</Link>
            </li>)}
        </ul>
    );
}
