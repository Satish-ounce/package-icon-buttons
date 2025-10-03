import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import React from "react";

const isDisabledElement = (child) =>
  React.isValidElement(child) && Boolean(child.props?.disabled);

const LightTooltip = styled(({ className, children, ...props }) => {
  const isDisabled = isDisabledElement(children);

  if (isDisabled) {
    return <span>{children}</span>;
  }

  return (
    <Tooltip {...props} classes={{ popper: className }}>
      <span>{children}</span>
    </Tooltip>
  );
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

export default LightTooltip;
