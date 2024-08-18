import { salesData } from "../data";

const {dayWiseData, weeklyWiseData, monthWiseData, yearWiseData} = salesData

export const getSalesChartData = (selectedRange) => {
    switch (selectedRange) {
      case "1D":
        return {
          categories: dayWiseData.map((item) => item.hour),
          seriesData: dayWiseData.map((item) => item.amount),
        };
        case "1W":
          return {
            categories: weeklyWiseData.map((item) => item.day),
            seriesData: weeklyWiseData.map((item) => item.amount),
          };
      case "1M":
        return {
          categories: monthWiseData.map((item) => item.date),
          seriesData: monthWiseData.map((item) => item.amount),
        };
      case "1Y":
        return {
          categories: yearWiseData.map((item) => item.month),
          seriesData: yearWiseData.map((item) => item.amount),
        };
      default:
        return {
          categories: [],
          seriesData: [],
        };
    }
  };

export const getSalesChartOptions = (chartData)=>{
    return {
        series: [
          {
            name: "Sales",
            data: chartData.seriesData,
          },
        ],
        options: {
          chart: {
            type: "area",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "smooth",
            width: 3,
          },
          markers: {
            size: 5,
          },
          xaxis: {
            categories: chartData.categories,
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return `${value / 1000}k`;
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            y: {
              formatter: function (value) {
                return `Rs ${value}`;
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.4,
              opacityTo: 0.2,
              stops: [0, 90, 100],
            },
          },
          colors: ["#8884d8"],
          grid: {
            borderColor: "#e7e7e7",
            strokeDashArray: 4,
          },
        },
      };
}