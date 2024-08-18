import React from "react";
import { styled } from "@mui/system";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";

const OrderTimeText = styled(Typography)({
  fontFamily: "Lato, sans-serif",
  fontSize: "15.47px",
  fontWeight: 700,
  lineHeight: "17.02px",
  letterSpacing: "0.38673996925354004px",
  textAlign: "left",
});

const TodayText = styled(Typography)({
  fontFamily: "Lato, sans-serif",
  fontSize: "10.06px",
  fontWeight: 400,
  lineHeight: "16.24px",
  letterSpacing: "0.38673996925354004px",
  textAlign: "left",
  marginTop: "10px",
});

const DonutChart = () => {
  const hoverBackgroundClrs = ["#d6bfff", "#b9f3ea", "#fcbbb2"];

  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Afternoon", "Evening", "Morning"],
    colors: ["#AF69EF", "#60E3CF", "#FF8373"],
    tooltip: {
      enabled: true,
      style: {
        fontSize: "14px",
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div style="padding:10px;color:#fff;background-color:${hoverBackgroundClrs[seriesIndex]};border-radius:5px;">
                  <strong>${w.globals.labels[seriesIndex]}</strong><br />
                  1pm - 4pm<br />
                  <strong>${series[seriesIndex]} orders</strong>
                </div>`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
        },
        expandOnClick: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#ffffff"],
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      formatter: function (label, opts) {
        const currentVal = opts.w.globals.series[opts.seriesIndex];
        const totalSum = opts.w.globals.series.reduce(
          (acc, num) => (acc += num),
          0
        );
        return `${label}: ${((currentVal / totalSum) * 100).toFixed(1)}%`;
      },
      labels: {
        colors: ["#AF69EF", "#60E3CF", "#FF8373"],
      },
      markers: {
        width: 12,
        height: 12,
        radius: 12,
        offsetX: -2,
        offsetY: 0,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    series: [2400, 3600, 1200],
  };

  return (
    <Box padding={2}>
      <OrderTimeText>Order Time</OrderTimeText>
      <TodayText>Today</TodayText>
      <Chart options={chartOptions} series={chartOptions.series} type="donut" />
    </Box>
  );
};

export default DonutChart;
