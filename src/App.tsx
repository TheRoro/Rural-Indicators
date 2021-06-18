import { useEffect, useState } from 'react';
import compareTwoIndicators, { kMeansClusters } from './services/API';
import indicatorsList, { indicatorSelectType } from './assets/indicators';
import Charts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import Select from 'react-select';

function App() {
  const [indicator1, setIndicator1] = useState<indicatorSelectType>(indicatorsList[0]);
  const [indicator2, setIndicator2] = useState<indicatorSelectType>(indicatorsList[1]);
  const [loading, setLoading] = useState<boolean>(false);
  const [serverStatus, setServerStatus] = useState<string>('circle-inactive');
  const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(false);
  const [dataState, setDataState] = useState('REGIONES');
  const [clusteredSeries, setClusteredSeries] = useState([{}]);
  const [regionalSeries, setRegionalSeries] = useState([{}]);
  const [clusteredOptions] = useState<ApexOptions>({
    chart: {
      foreColor: '#fafafa',
      height: 350,
      zoom: {
        enabled: true,
        type: 'xy',
      }
    },
    title: {
      text: 'Datos Clusterizados',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#fafafa'
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        style: {
          colors: '#ffffff'
        },
        formatter: function (val: any) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        style: {
          colors: '#ffffff'
        },
      }
    },
    markers: {
      colors: ['#ffffff', '#ffffff', '#ffffff']
    }
  });
  const [regionalOptions] = useState<ApexOptions>({
    chart: {
      foreColor: '#fafafa',
      height: 350,
      zoom: {
        enabled: true,
        type: 'xy',
      }
    },
    title: {
      text: 'Datos por Región',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#fafafa'
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        style: {
          colors: '#ffffff'
        },
        formatter: function (val: any) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        style: {
          colors: '#ffffff'
        },
      }
    },
    markers: {
      colors: ['#ffffff', '#ffffff', '#ffffff']
    }
  });

  useEffect(() => {
    const onInit = async () => {
      let data = await compareTwoIndicators(indicator1.value, indicator2.value);
      if (data) {
        setServerStatus('circle-active');
      }
    };
    if (dataIsLoaded) {
      window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }

    onInit();
  }, [indicator1, indicator2, dataIsLoaded]);

  const submitValues = async () => {
    setLoading(true);
    setDataIsLoaded(false);
    setDataIsLoaded(false);
    let clusteredData = await kMeansClusters(indicator1.value, indicator2.value);
    let regionalData = await compareTwoIndicators(indicator1.value, indicator2.value);
    setClusteredSeries(clusteredData);
    setRegionalSeries(regionalData);
    setLoading(false);
    setDataIsLoaded(true);
  }

  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: 60,
      minHeight: 35
    })
  };

  const onChangeSelect1 = (e: any) => {
    setIndicator1(e);
  }

  const onChangeSelect2 = (e: any) => {
    setIndicator2(e);
  }

  const reactSelectTheme = (theme: any) => ({
    ...theme,
    borderRadius: 5,
    height: '50px',
    colors: {
      ...theme.colors,
      primary25: '#D87CAC',
      primary: '#212738',
    },
  })

  return (
    <div className="main">
      <h1 className="title">INDICADORES DE EDUCACIÓN RURAL</h1>
      <div className="server-status">
        <p className="server-label">Server Status:</p><span className={serverStatus}></span>
      </div>
      <div className="selectRow">
        <Select styles={customStyles} className="select" theme={reactSelectTheme} options={indicatorsList} value={indicator1} onChange={onChangeSelect1} defaultValue={indicatorsList[0]} />
      </div>
      <div className="selectRow">
        <Select styles={customStyles} className="select" theme={reactSelectTheme} options={indicatorsList} value={indicator2} onChange={onChangeSelect2} defaultValue={indicatorsList[1]} />
      </div>
      <div>
        <button className="searchBtn" onClick={submitValues}>VER INDICADORES</button>
      </div>
      {loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {dataIsLoaded && <div id="chart">
        <Charts options={clusteredOptions} series={clusteredSeries} type="scatter" height={650} width={1000} />
      </div>
      }
      {dataIsLoaded && <div id="chart">
        <Charts options={regionalOptions} series={regionalSeries} type="scatter" height={650} width={1000} />
      </div>
      }
    </div>
  );
}

export default App;