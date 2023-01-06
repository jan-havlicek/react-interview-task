import { Outlet } from 'react-router-dom';
import ReportList from './ReportList';
import { useSelector } from 'react-redux';
import { ReportsState } from './reducers/reportsReducer';

function ReportPage() {
    const reportsState = useSelector((state: {reports: ReportsState}) => state.reports)

    return <div>
        <h1>Sonar reports for MANTA projects</h1>
        <ReportList currentReportId={reportsState.report?.id} reportsHeaderInfo={reportsState.availableReportConfigs}></ReportList>
        <Outlet />
    </div>
    // const reportsState = useSelector((state: { queryPage: QueryPageState }) => state.queryPage);
    // const authState = useSelector((state: { auth: UserInfo }) => state.auth);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(loadTechnologiesRequest());
    // }, []);
    //
    // return (
    //     <section>
    //         <QueryForm
    //             userInfo={authState}
    //             queryModel={queryPageState.pendingQuery || queryPageState.queryHistory[queryPageState.activeQueryIndex]}
    //             queryHistoryInfo={
    //                 {
    //                     activeQueryIndex: queryPageState.activeQueryIndex,
    //                     queryHistorySize: queryPageState.queryHistory.length
    //                 }
    //             }
    //             technologies={queryPageState.technologies}
    //             isSubmitting={queryPageState.formSubmitting}
    //             queryResponse={queryPageState.queryResponse}
    //             flashMessage={queryPageState.flashMessage}
    //             queryPageConfig={queryPageState.queryPageConfig}
    //             onSubmit={values => dispatch(submitQueryForm(values))}
    //             onSelectQuery={index => dispatch(goToQuery(index))}
    //         />
    //     </section>
    // );
}

export default ReportPage;
