import { useEffect, useState } from 'react';
import compareTwoIndicators from './services/API';
import indicatorsList from './assets/indicators';
import Charts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function App() {
  const [indicator1, setIndicator1] = useState<string>('RURAL_PMM');
  const [indicator2, setIndicator2] = useState<string>('RURAL_PMM_MUJE1');
  const [loading, setLoading] = useState<boolean>(false);
  const [serverStatus, setServerStatus] = useState<string>('circle-inactive');
  const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(false);
  const [series, setSeries] = useState([{}]);
  const [options] = useState<ApexOptions>({
    chart: {
      foreColor: '#fafafa',
      height: 350,
      zoom: {
        enabled: true,
        type: 'xy',
      }
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
      let data = await compareTwoIndicators(indicator1, indicator2);
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
    let data = await compareTwoIndicators(indicator1, indicator2);
    setSeries(data);
    setLoading(false);
    setDataIsLoaded(true);
  }

  const onChangeSelect1 = (e: any) => {
    setIndicator1(e.target.value);
  }

  const onChangeSelect2 = (e: any) => {
    setIndicator2(e.target.value);
  }
  return (
    <div className="main">
      <h1 className="title">INDICADORES DE EDUCACIÓN RURAL</h1>
      <div className="server-status">
        <p className="server-label">Server Status:</p><span className={serverStatus}></span>
      </div>
      <select className="select" name="indicators1" id="indicator1" onChange={onChangeSelect1}>
        {indicatorsList.map(indicator =>
          <option key={indicator.id} value={indicator.value}>{indicator.label}</option>
        )};
      </select>
      <select className="select" name="indicators2" id="indicator2" onChange={onChangeSelect2}>
        {indicatorsList.map(indicator =>
          <option key={indicator.id} value={indicator.value}>{indicator.label}</option>
        )};
      </select>
      <button className="searchBtn" onClick={submitValues}>VER INDICADORES</button>
      {loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {dataIsLoaded && <div id="chart">
        <Charts options={options} series={series} type="scatter" height={650} width={1000} />
      </div>}
    </div>
  );
}

export default App;