$(function () {
  const labels = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const addPercentageSymbol = (value) => value + "%";

  //資料
  const data1 =  {
    labels: labels,
    datasets: [
      {
        label: "1Business who see video as an important part of their marketing strategy",
        data: [78, 88, 82, 85, 91, 92, 93, 92, 96],
        backgroundColor: "#A0ACBC",
      },
    ],
  }

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "2Business who see video as an important part of their marketing strategy",
        data: [20, 88, 82, 85, 91, 92, 93, 92, 96],
        backgroundColor: "#A0ACBC",
      },
    ],
  }

  const data3 = {
    labels: labels,
    datasets: [
      {
        label: "3Business who see video as an important part of their marketing strategy",
        data: [40, 88, 82, 85, 91, 92, 93, 92, 96],
        backgroundColor: "#A0ACBC",
      },
    ],
  }

  const data4 = {
    labels: labels,
    datasets: [
      {
        label: "4Business who see video as an important part of their marketing strategy",
        data: [60, 88, 82, 85, 91, 92, 93, 92, 96],
        backgroundColor: "#A0ACBC",
      },
    ],
  }

  const config = {
    plugins: [ChartDataLabels],
    type: "bar",
    options: {
      plugins: {
        datalabels: {
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
          }
        },
      },
    },
  };

  //設定值
  const config1 = { ...config, data: data1 };
  const config2 = { ...config, data: data2 };
  const config3 = { ...config, data: data3 };
  const config4 = { ...config, data: data4 };

  //綁定
  function createCharts() {
    new Chart($('#myChart1'), config1);
    new Chart($('#myChart2'), config2);
    new Chart($('#myChart3'), config3);
    new Chart($('#myChart4'), config4);
  }

  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 6*1000, // Set the autoplay delay (in milliseconds)
        disableOnInteraction: false // Keep autoplaying even when user interacts with swiper
    },
    on: {
      init: createCharts // Create the charts when Swiper is initialized
    }
  });
});
