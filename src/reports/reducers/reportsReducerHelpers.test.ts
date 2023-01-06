import { filterMeasures } from './reportsReducer';

it('filters selected measures and transforms into array of objects for each measure', () => {
    // arrange
    const measuresObj = {
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
    const selectedMeasures = ["critical_violations", "blocker_violations", "major_violations", "ncloc"];

    // expected
    const expectedComparisonTablesData: {measure: string, value: string}[] = [
            {measure: "critical_violations", value: "20"},
            {measure: "blocker_violations", value: "4"},
            {measure: "major_violations", value: "89"},
            {measure: "ncloc", value: "11913"},
        ]
    ;

    // act
    const filteredMeasures = filterMeasures(measuresObj, selectedMeasures);
    expect(filteredMeasures).toEqual(expectedComparisonTablesData);
});
