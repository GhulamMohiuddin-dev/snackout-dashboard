import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";

export const CenteredBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const StatText = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "center",
});

export const BulletBox = styled(Box)({
  display: "flex",
  gap: "12px",
  margin: "12px",
  alignItems: "center",
});

export const BulletPoint = styled(Box)(({ color }) => ({
  height: "8px",
  width: "8px",
  borderRadius: "50px",
  background: color,
}));

export const BulletText = styled(Typography)({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
});

export const AvatarContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "42px",
});

export const CustomAvatar = styled(Avatar)(({ background, zIndex, left, color }) => ({
  background,
  zIndex,
  color,
  left,
  position: "relative",
  border: "1px solid #fff",
  fontSize: "8px",
  fontWeight: 500,
  lineHeight: "14px",
}));