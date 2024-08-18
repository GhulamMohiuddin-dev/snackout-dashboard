import RevenueIcon from "../static/svg/revenue.svg";
import DeliveryIcon from "../static/svg/delivery.svg";
import PickUpsIcon from "../static/svg/pickups.svg";
import DineInIcon from "../static/svg/dinein.svg";
import foodIcon1 from "../static/svg/food1.svg";
import foodIcon2 from "../static/svg/food2.svg";
import foodIcon3 from "../static/svg/food3.svg";
import foodIcon4 from "../static/svg/food4.svg";

export const KPIData = [
    {
      title: "Revenue",
      icon: RevenueIcon,
      currency: "Rs",
      amount: "149,330",
      cents: 35,
      percentage: "10",
      trend: "up",
      color: "#A796E4",
    },
    {
      title: "Delivery",
      icon: DeliveryIcon,
      currency: "Rs",
      amount: "149,330",
      cents: 35,
      percentage: "10",
      trend: "up",
      color: "#FE8B8B",
    },
    {
      title: "Pick ups",
      icon: PickUpsIcon,
      currency: "Rs",
      amount: "149,330",
      cents: 35,
      percentage: "10",
      trend: "down",
      color: "#04C7D3",
    },
    {
      title: "Dine in",
      icon: DineInIcon,
      currency: "Rs",
      amount: "149,330",
      cents: 35,
      percentage: "10",
      trend: "up",
      color: "#5EE2AB",
    },
  ];
  
  export const salesData = {
    dayWiseData: [
      { hour: "00:00", amount: 5000 },
      { hour: "04:00", amount: 3000 },
      { hour: "08:00", amount: 8000 },
      { hour: "12:00", amount: 4000 },
      { hour: "16:00", amount: 3300 },
      { hour: "20:00", amount: 3100 },
      { hour: "24:00", amount: 3600 },
    ],
     monthWiseData: [
      { date: "01-08", amount: 45000 },
      { date: "06-08", amount: 56000 },
      { date: "12-08", amount: 56000 },
      { date: "18-08", amount: 56000 },
      { date: "24-08", amount: 56000 },
      { date: "30-08", amount: 56000 },
    ],
     yearWiseData: [
      { month: "Jan", amount: 600000 },
      { month: "Feb", amount: 650000 },
      { month: "Mar", amount: 650000 },
      { month: "Apr", amount: 650000 },
      { month: "May", amount: 650000 },
      { month: "Jun", amount: 650000 },
      { month: "Jul", amount: 650000 },
      { month: "Aug", amount: 650000 },
    ],
     weeklyWiseData: [
      { day: "Mon", amount: 600000 },
      { day: "Tue", amount: 650000 },
      { day: "Wed", amount: 650000 },
      { day: "Thu", amount: 650000 },
      { day: "Fri", amount: 650000 },
      { day: "Sat", amount: 650000 },
      { day: "Sun", amount: 650000 },
    ]
  }
  
  export const ordersData = [
    {
      id: 1,
      image: foodIcon1,
      title: "Fresh Salad Bowl",
      noOfOrders: "120",
      price: "1000",
    },
    {
      id: 2,
      image: foodIcon2,
      title: "Smoothie Salad Bowl",
      noOfOrders: "89",
      price: "1250",
    },
    {
      id: 3,
      image: foodIcon3,
      title: "Hot Chilli Wings",
      noOfOrders: "76",
      price: "700",
    },
    {
      id: 4,
      image: foodIcon4,
      title: "Chicken Noodles",
      noOfOrders: "60",
      price: "1000",
    },
  ];
  
  export const bookingsData = [
    {
      id: 1,
      title: "Type 2",
      date: "20 Dec at 3:30 pm",
      restaurant: "Restaurant 1",
      duration: "Booked for 30 minutes",
      chipLabel: "Reservation",
      chipColor: "#89B8FF",
    },
    {
      id: 2,
      title: "ChAdeMO",
      date: "12 Nov at 1:00 pm",
      restaurant: "Restaurant 2",
      duration: "Booked for 30 minutes",
      chipLabel: "Delivery",
      chipColor: "#FFCD1C",
    },
    {
      id: 3,
      title: "GBT",
      date: "08 Oct at 12:00 am",
      restaurant: "Restaurant 3",
      duration: "Booked for 30 minutes",
      chipLabel: "Pick up",
      chipColor: "#00C572",
    },
  ];