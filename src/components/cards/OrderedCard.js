import React from "react";
import { Grid, Box } from "@mui/material";
import { ordersData as orders } from "../../data";
import { TitleBox, TitleText } from "../../styles/CommonStyles";
import { ImageBox, OrderBox, OrderDetails, OrderInfoBox, OrderPrice, OrderTitle } from "../../styles/OrderCardStyles";

const OrderedCard = () => {
  return (
    <Grid margin={2}>
      <TitleBox>
        <TitleText>
          Most Ordered
        </TitleText>
      </TitleBox>
      {orders.map((order) => (
        <OrderBox key={order.id}>
          <ImageBox>
            <img src={order.image} alt={order.title} />
          </ImageBox>
          <OrderInfoBox>
            <Box>
              <OrderTitle variant="subtitle1">{order.title}</OrderTitle>
              <OrderDetails variant="body2">{`Orders: ${order.noOfOrders}`}</OrderDetails>
            </Box>
            <OrderPrice variant="body2">{`Rs ${order.price}.00`}</OrderPrice>
          </OrderInfoBox>
        </OrderBox>
      ))}
    </Grid>
  );
};

export default OrderedCard;
