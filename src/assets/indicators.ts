type indicatorSelectType = {
    value: string,
    label: string,
    id: number
}

const indicatorsList: indicatorSelectType[] = [
    {
        id: 0,
        value: 'RURAL_PMM',
        label: 'IIEE Primaria Multigrado Monoligüe (PMM)'
    },
    {
        id: 1,
        value: 'RURAL_PMM_MUJE1',
        label: 'Estudiantes Mujeres de PMM entre 6 y 11 años'
    },
    {
        id: 2,
        value: 'RURAL_PMM_MUJE2',
        label: 'Estudiantes Mujeres de PMM entre 12 y 14 años'
    },
    {
        id: 3,
        value: 'RURAL_PMM_HOME1',
        label: 'Estudiantes Hombres de PMM entre 6 y 11 años'
    },
    {
        id: 4,
        value: 'RURAL_PMM_HOME2',
        label: 'Estudiantes Hombres de PMM entre 12 y 14 años'
    },
    {
        id: 5,
        value: 'RURAL_PMMA_MUJE1',
        label: 'Estudiantes Mujeres de PMM entre 6 y 11 años que reciben Acopañamiento Pedagógico'
    },
    {
        id: 6,
        value: 'RURAL_PMMA_MUJE2',
        label: 'Estudiantes Mujeres de PMM entre 12 y 14 años que reciben Acopañamiento Pedagógico'
    },
    {
        id: 7,
        value: 'RURAL_PMMA_HOME1',
        label: 'Estudiantes Hombres de PMM entre 6 y 11 años que reciben Acopañamiento Pedagógico'
    },
    {
        id: 8,
        value: 'RURAL_PMMA_HOME2',
        label: 'Estudiantes Hombres de PMM entre 12 y 14 años que reciben Acopañamiento Pedagógico'
    },
    {
        id: 9,
        value: 'RURAL_PMM_MUJDOC',
        label: 'Docentes Mujeres de PMM'
    },
    {
        id: 10,
        value: 'RURAL_PMM_HOMDOC',
        label: 'Docentes Hombres de PMM'
    },
    {
        id: 11,
        value: 'RURAL_PMMA_MUJDOC',
        label: 'Docentes Mujeres de PMM que reciben Acopañamiento Pedagógico'
    },
    {
        id: 12,
        value: 'RURAL_PMMA_HOMDOC',
        label: 'Docentes Hombres de PMM que reciben Acopañamiento Pedagógico'
    },
    {
        id: 13,
        value: 'RURAL_CRFA',
        label: 'IIEE Centro de Formación Rural en Alternancia (CRFA)'
    },
    {
        id: 14,
        value: 'RURAL_SRE',
        label: 'IIEE Secundaria con Residencia Estudiantil (SRE)'
    },
    {
        id: 15,
        value: 'RURAL_ST',
        label: 'IIEE Secundaria Tutorial (ST)'
    },
    {
        id: 16,
        value: 'RURAL_CRFA_MUJE1',
        label: 'Estudiantes Mujeres de CRFA entre 12 y 17 años'
    },
    {
        id: 17,
        value: 'RURAL_CRFA_MUJE2',
        label: 'Estudiantes Mujeres de CRFA entre 18 y 20 años'
    },
    {
        id: 18,
        value: 'RURAL_CRFA_HOME1',
        label: 'Estudiantes Hombres de CRFA entre 12 y 17 años'
    },
    {
        id: 19,
        value: 'RURAL_CRFA_HOME2',
        label: 'Estudiantes Hombres de CRFA entre 18 y 20 años'
    },
    {
        id: 20,
        value: 'RURAL_SRE_MUJE1',
        label: 'Estudiantes Mujeres de SRE entre 12 y 17 años'
    },
    {
        id: 21,
        value: 'RURAL_SRE_MUJE2',
        label: 'Estudiantes Mujeres de SRE entre 18 y 20 años'
    },
    {
        id: 22,
        value: 'RURAL_SRE_HOME1',
        label: 'Estudiantes Hombres de SRE entre 12 y 17 años'
    },
    {
        id: 23,
        value: 'RURAL_SRE_HOME2',
        label: 'Estudiantes Hombres de SRE entre 18 y 20 años'
    },
    {
        id: 24,
        value: 'RURAL_MSE_MUJDOC',
        label: 'Docentes Mujeres de Modelos de Servicio Educativo: CRFA, SRE, ST'
    },
    {
        id: 25,
        value: 'RURAL_MSE_HOMDOC',
        label: 'Docentes Hombres de Modelos de Servicio Educativo: CRFA, SRE, ST'
    },
];

export default indicatorsList;