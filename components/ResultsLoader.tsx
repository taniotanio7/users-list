import React from "react";
import tw from "twin.macro";
import ContentLoader from "react-content-loader";

import colors from "tailwindcss/colors";
import { randomInRange } from "../util";

const CIRCLY_Y_AXIS = 10;
const RECT_Y_AXIS = 5;
const MULTIPLIER = 21;
const AMOUNT = 8;

export default function ResultsLoader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={165}
      viewBox="0 0 400 165"
      title="Loading users list..."
      foregroundColor={colors.warmGray["200"]}
      backgroundColor={colors.warmGray["300"]}
    >
      {Array(AMOUNT)
        .fill("")
        .map((_, index) => (
          <React.Fragment key={index}>
            <circle cx="10" cy={CIRCLY_Y_AXIS + index * MULTIPLIER} r="6" />
            <rect
              x="25"
              y={RECT_Y_AXIS + index * MULTIPLIER}
              rx="5"
              ry="5"
              width={randomInRange(0, 6) * 10 + 220}
              height="10"
            />
          </React.Fragment>
        ))}
    </ContentLoader>
  );
}
