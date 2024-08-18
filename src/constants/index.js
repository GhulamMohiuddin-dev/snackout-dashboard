import DashboardIcon from "../static/svg/dashboard.svg";
import RestaurantsIcon from "../static/svg/restaurants.svg";
import ProfileSettingsIcon from "../static/svg/setting.svg";

export const drawerWidth = 300;
export const drawerItemHeight = 40;
export const MENU = [
  {
    id: 0,
    text: "Dashboard",
    icon: DashboardIcon,
    hasMore: false,
  },
  {
    id: 1,
    text: "Restaurants",
    icon: RestaurantsIcon,
    hasMore: true,
    children: [
      {
        id: 2,
        text: "Restaurant 1",
        icon: "",
        hasMore: true,
        children: [
          {
            id: 3,
            text: "Details",
            icon: null,
            hasMore: false,
          },
          {
            id: 4,
            text: "Menu",
            icon: null,
            hasMore: false,
          },
          {
            id: 5,
            text: "Bookings",
            icon: null,
            hasMore: false,
          },
          {
            id: 6,
            text: "Transaction History",
            icon: null,
            hasMore: false,
          },
          {
            id: 7,
            text: "Reviews & Feedback",
            icon: null,
            hasMore: false,
          },
        ],
      },
      {
        id: 8,
        text: "Add New Restaurant",
        icon: "",
        hasMore: false,
      },
    ],
  },
  {
    id: 9,
    text: "Profile Settings",
    icon: ProfileSettingsIcon,
    hasMore: false,
  },
];

export const KPICardStyle = {
  paddingLeft: "30px",
  paddingTop: "16px",
  paddingBottom: "16px",
  paddingRight: "8px",
  width: `calc(100%-30px)`,
  Height: "102px",
};

export const avatarBGColor = [ "#FFD493","#FFCAC6","#FFF3B3","#CAFFC9","#FED0FF","#FFB3A3","#C8CBFF","#212355"]