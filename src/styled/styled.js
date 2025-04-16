import { css } from "styled-components";

export const flexMixin = (
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = 0,
  wrap = "nowrap"
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};

export const font = (size, weight = 400) => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
  `;
};

export const tagColor = "#d7fa00;";
export const gray = "rgb(160, 160, 160)";
