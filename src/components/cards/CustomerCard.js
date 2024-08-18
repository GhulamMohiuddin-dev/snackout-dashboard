import React from "react";
import { Grid, Box } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { avatarBGColor } from "../../constants";
import {
  CenteredBox,
  StatText,
  BulletBox,
  BulletPoint,
  BulletText,
  AvatarContainer,
  CustomAvatar,
} from "../../styles/CustomerCardStyles";
import { TitleBox, TitleText } from "../../styles/CommonStyles";

const CustomerCard = () => {
  return (
    <Grid margin={2}>
      <TitleBox>
        <TitleText variant="subtitle1">Customers</TitleText>
      </TitleBox>

      <CenteredBox>
        <StatText>10,3467</StatText>
        <Box sx={{ width: "80%", margin: "30px 0px 30px 0px" }}>
          <ProgressBar
            completed="75"
            baseBgColor="#D6F0DB"
            bgColor="#A796E4"
            isLabelVisible={false}
            height="16px"
          />
        </Box>
      </CenteredBox>

      <BulletBox>
        <BulletPoint color="#A796E4" />
        <BulletText>Snackout Loyal Customers Since July</BulletText>
      </BulletBox>

      <BulletBox>
        <BulletPoint color="#D6F0DB" />
        <BulletText>New Customers</BulletText>
      </BulletBox>
      <AvatarContainer>
        {["SJ", "JK", "DF", "SR", "YR", "CM", "NS", "1.3K"].map(
          (csmtrName, index) => (
            <CustomAvatar
              background={avatarBGColor[index]}
              zIndex={index}
              left={`${28 - index * 12}px`}
              color={index < avatarBGColor.length - 1 ? "black" : "white"}
            >
              {csmtrName}
            </CustomAvatar>
          )
        )}
      </AvatarContainer>
    </Grid>
  );
};

export default CustomerCard;
