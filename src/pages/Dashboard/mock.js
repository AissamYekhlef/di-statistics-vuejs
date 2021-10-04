import config from '@/config';

export default {
  bigStat: [
    {
      product: 'Light Blue',
      total: '4,232',
      color: 'primary',
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: 'Sing App',
      total: '754',
      color: 'danger',
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: 'RNS',
      total: '1,025',
      color: 'info',
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  trend: {
    gradient: [config.light.success]
  },
  table: [
    {
      id: 0,
      name: 'Mark Otto',
      email: 'ottoto@wxample.com',
      product: 'ON the Road',
      price: '$25 224.2',
      date: '11 May 2017',
      city: 'Otsego',
      status: 'Sent',
    },
    {
      id: 1,
      name: 'Jacob Thornton',
      email: 'thornton@wxample.com',
      product: 'HP Core i7',
      price: '$1 254.2',
      date: '4 Jun 2017',
      city: 'Fivepointville',
      status: 'Sent',
    },
    {
      id: 2,
      name: 'Larry the Bird',
      email: 'bird@wxample.com',
      product: 'Air Pro',
      price: '$1 570.0',
      date: '27 Aug 2017',
      city: 'Leadville North',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Joseph May',
      email: 'josephmay@wxample.com',
      product: 'Version Control',
      price: '$5 224.5',
      date: '19 Feb 2018',
      city: 'Seaforth',
      status: 'Declined',
    },
    {
      id: 4,
      name: 'Peter Horadnia',
      email: 'horadnia@wxample.com',
      product: 'Let\'s Dance',
      price: '$43 594.7',
      date: '1 Mar 2018',
      city: 'Hanoverton',
      status: 'Sent',
    },
  ],
  menu: [
    'Edit',
    'Copy',
    'Delete',
    'Print'
  ],
  lastReports: [
    {title: 'Print PDF', icon: 'mdi-printer'},
    {title: 'Download', icon: 'mdi-download'},
    {title: 'Sand by mail', icon: 'mdi-email'},
    {title: 'Share', icon: 'mdi-share-variant'}
  ],
  select: ['Daily', 'Weekly', 'Monthly'],
  apexPie: {
    options: {
      dataLabels: {
        enabled: false
      },
      colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning],
      labels: ["Freezer-80", "Sample", "Visit", "Others"],
      legend: {

      }
    },
    series: [4, 3, 3, 2],
  },
  apexPie2: {
    options: {
      dataLabels: {
        enabled: false
      },
      colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning],
      labels: ["entity_barcode", "storage_name", "visit_date", "Others"],
      legend: {

      }
    },
    series: [4, 3, 3, 2],
  },
  apexArea1: {
    options: {
      chart: {
        id: 'apexAreaFirst',
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.secondary],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [50, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  apexArea2: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.primary],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  apexArea3: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.warning],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  mainApexArea: {
    options: {
      chart: {
        width: '1%',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      markers: {
        size: [5, 0, 0]
      },
      stroke: {
        width: [3, 3, 0],
        curve: ['straight', 'smooth', "smooth"]
      },
      fill: {
        type: 'linear',
      },
      legend: {
        show: false

      },
      colors: [config.light.warning, config.light.primary, '#f3f5ff'],
      yaxis: {
        axisBorder: {
          show: true,
          color: '#B9B9B980'
        },
        labels: {
          style: {
            colors: ['#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
            fontSize: '12px',
          },
        },
        tickAmount: 5
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: ['#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
          }
        },
        tickAmount: 10,
      }
    },
    series: [
      {
        name: 'Entitytype',
        type: 'line',
        data: [31, 40, 28, 51, 42, 60, 51, 31, 40, 28, 51, 42, 60, 51]
      },
      {
        name: 'Entity',
        type: 'line',
        data: [11, 32, 45, 30, 34, 52, 41, 11, 32, 45, 30, 34, 52, 41]
      },
      {
        name: 'Field',
        type: 'line',
        data: [21, 20, 18, 41, 12, 36, 61, 21, 20, 18, 41, 12, 36, 61]
      }
    ],
    series2: [
      {
        name: 'Tablet',
        type: 'line',
        data: [21, 30, 28, 61, 52, 50, 41, 21, 20, 38, 61, 52, 7090, 61]
      },
      {
        name: 'Mobile',
        type: 'line',
        data: [11, 32, 45, 30, 34, 52, 41, 11, 32, 45, 30, 34, 52, 41]
      },
      {
        name: 'Desktop',
        type: 'area',
        data: [21, 20, 18, 41, 12, 36, 61, 21, 20, 18, 41, 12, 36, 61]
      }
    ],
    series3: [
      {
        name: 'Tablet',
        type: 'line',
        data: [41, 50, 48, 81, 72, 70, 61, 41, 40, 58, 81, 72, 90, 81]
      },
      {
        name: 'Mobile',
        type: 'line',
        data: [41, 52, 75, 60, 64, 82, 71, 41, 62, 75, 60, 64, 82, 71]
      },
      {
        name: 'Desktop',
        type: 'area',

        data: [51, 50, 48, 71, 42, 66, 91, 51, 50, 48, 71, 42, 46, 91]
      }
    ],
  },
  apexBar1: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.primary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [70, 63, 84, 79, 70, 65, 80]
    }],
  },
  apexBar2: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.warning],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [30, 23, 54, 69, 40, 25, 60]
    }],
  },
  apexBar3: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.secondary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [60, 43, 24, 19, 30, 45, 60]
    }],
  }
};
