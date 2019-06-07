import { normalEyes, angryEyes, unhappyEyes } from "./StylingCode/EmoEyes";

export const stylingArray = [
  {
    type: "Color",
    variant: "Primary",
    arr: [
      { type: "orange", code: "#ffc10e" },
      { type: "brown", code: "#D2B48C" },
      { type: "pink", code: "#ffc0cb" },
      { type: "green", code: "#A4D1A2" }
    ]
  },
  {
    type: "Eyes",
    variant: "Secondary",
    arr: [
      { type: "none", code: null },
      { type: "normal", code: normalEyes },
      { type: "unhappy", code: unhappyEyes },
      { type: "angry", code: angryEyes }
    ]
  }
];
