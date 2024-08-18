import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { bookingsData as bookings } from "../../data";
import { TitleBox, TitleText } from "../../styles/CommonStyles";
import {
  HeaderBox,
  BookingAvatar,
  InfoBox,
  BookingDetailsBox,
  BookingChip,
} from "../../styles/BookingCardStyles";

const BookingCard = () => {
  return (
    <Grid margin={2}>
      <HeaderBox>
        <TitleText
          variant="subtitle1"
          fontWeight="700"
          fontSize="16px"
          color="#343450"
        >
          Ongoing
        </TitleText>
        <Typography
          variant="subtitle1"
          fontWeight="500"
          fontSize="9.29px"
          color="#CB77FF"
        >
          {`View All >`}
        </Typography>
      </HeaderBox>
      {bookings.map((booking) => (
        <TitleBox
          sx={{
            padding: 2,
            border: "1px solid #DDDDDD",
            borderRadius: "5.31px",
          }}
          key={booking.id}
        >
          <BookingAvatar>{booking.id}</BookingAvatar>
          <InfoBox>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" fontSize="10px">
                {booking.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" fontSize="8px">
                {booking.date}
              </Typography>
            </Box>
            <BookingDetailsBox>
              <Typography variant="body2" color="#A4A4A4" fontSize="8px">
                Booked at
              </Typography>
              <Typography variant="body2" color="#000000" fontSize="10px">
                <strong>{booking.restaurant}</strong>
              </Typography>
              <Typography variant="body2" color="#A4A4A4" fontSize="8px">
                {booking.duration}
              </Typography>
            </BookingDetailsBox>
          </InfoBox>
          <BookingChip
            label={booking.chipLabel}
            chipColor={booking.chipColor}
          />
        </TitleBox>
      ))}
    </Grid>
  );
};

export default BookingCard;
