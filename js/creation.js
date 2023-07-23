$(function () {
  const labels = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const addPercentageSymbol = (value) => value + "%";
  const configset = [];
  const charts = [];
  const titles = [
    '1 Business who see video as an important part of their marketing strategy',
    '2 Business who see video as an important part of their marketing strategy',
    '3 Business who see video as an important part of their marketing strategy',
    '4 Business who see video as an important part of their marketing strategy',
  ];

  const baseDataset = {
    labels: labels,
    datasets: [
      {
        label: "default",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#A0ACBC",
      },
    ],
  }

  //資料
  const datasets =  [
    {
      labels: labels,
      datasets: [
        {
          data: [78, 88, 82, 85, 91, 92, 93, 92, 96],
          backgroundColor: "#A0ACBC",
        },
      ],
    },
    {
      labels: labels,
      datasets: [
        {
          label: "2Business who see video as an important part of their marketing strategy",
          data: [20, 88, 82, 85, 91, 92, 93, 92, 96],
          backgroundColor: "#A0ACBC",
        },
      ],
    },
    {
      labels: labels,
      datasets: [
        {
          label: "3Business who see video as an important part of their marketing strategy",
          data: [40, 88, 82, 85, 91, 92, 93, 92, 96],
          backgroundColor: "#A0ACBC",
        },
      ],
    },
    {
      labels: labels,
      datasets: [
        {
          label: "4Business who see video as an important part of their marketing strategy",
          data: [60, 88, 82, 85, 91, 92, 93, 92, 96],
          backgroundColor: "#A0ACBC",
        },
      ],
    }
  ];

  //設定值
  for(let idx in datasets) {
    configset[idx] = {
      plugins: [ChartDataLabels],
      type: "bar",
      data: baseDataset,
      options: {
        animation: {
          onComplete: function () {
            // 在動畫完成後再顯示 Label
            this.options.plugins.datalabels.display = true;
            this.update(); // 更新圖表
          },
        },
        plugins: {
          legend: {
            display: false // 隱藏標題區的標籤
          },
          title: {
            display: true,
            text: titles[idx],
          },
          datalabels: {
            display: false,
            anchor: "end", // Position of the data label (top, end, center, etc.)
            align: "end", // Alignment of the data label (top, end, center, etc.)
            formatter: addPercentageSymbol, // Use the custom callback function for formatting
            font: {
              weight: "bold", // Optional, set font weight to bold for better visibility
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: addPercentageSymbol, // Use the custom callback function
            },
            title: { // Add the custom label for y-axis
              display: true,
              text: 'Custom Y-Axis Label', // Your custom label here
              font: {
                weight: "bold", // Optional, set font weight to bold for better visibility
              },
            }
          },
        },
      },
    };
  };

  //綁定
  function createCharts() {
    charts.push(new Chart($('#myChart1'), configset[0]));
    charts.push(new Chart($('#myChart2'), configset[1]));
    charts.push(new Chart($('#myChart3'), configset[2]));
    charts.push(new Chart($('#myChart4'), configset[3]));

    charts[0].data = datasets[0]
    charts[0].update()

    charts[1].data = datasets[1]
    charts[1].update()
  }

  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    // loop: true,
    autoplay: {
        delay: 6*1000, // Set the autoplay delay (in milliseconds)
        disableOnInteraction: false // Keep autoplaying even when user interacts with swiper
    },
    breakpoints: {
      // When screen width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },  
    },
    on: {
      init: createCharts, // Create the charts when Swiper is initialized
      slideChange: function () {
        const active = ($(window).width() > 640) ? this.activeIndex + 1: this.activeIndex;

        charts[active].data = baseDataset
        charts[active].options.plugins.datalabels.display = false;
        charts[active].update()
        
        charts[active].data = datasets[active]
        charts[active].update()
      }
    }
  });
});
