import { useParams } from 'react-router-dom';

function ReportEditPage() {
    let params: any  = useParams();
    if (params.id) {
        const reportId = parseInt(params.id, 10);
        return <h2>Edit report {reportId}</h2>
    } else {
        return <h2>Add new report</h2>
    }

}

export default ReportEditPage;
