import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function StatisticsCard(props) {
  const { diff, trend, sx, value, text, icon, backgroundColor } = props;
  const TrendIcon = trend === "up" ? ArrowUpwardIcon : ArrowDownwardIcon;
  const trendColor = trend === "up" ? "green" : "red";

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {text}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: backgroundColor,
                height: "56px",
                width: "56px",
              }}
            >
              {icon}
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Stack
                sx={{ alignItems: "center" }}
                direction="row"
                spacing={0.5}
              >
                <TrendIcon sx={{ color: trendColor, fontSize: "16px" }} />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
