import { normalEyes, winkEyes, surprisedEyes, happyEyes, angryEyes } from "./StylingCode/EmoEyes";
import { wideSmile, normalSmile, confusedSmile, happyTeeth, winkSmile } from "./StylingCode/EmoMouth";

export const stylingArray = [
  {
    type: "Color",
    variant: "Primary",
    arr: [
      { type: "orange", code: "#ffc10e" },
      { type: "brown", code: "#D2B48C" },
      { type: "pink", code: "#ffc0cb" },
      { type: "green", code: "#A4D1A2" },
      { type: "blue", code: "#D8DFEA" },
      { type: "yellow", code: 'yellow' },
    ]
  },
  {
    type: "Eyes",
    variant: "Secondary",
    arr: [
      { type: "noeyes", code: null },
      { type: "happy-eyes", code: happyEyes}, 
      { type: "normal", code: normalEyes },
      { type: "surprised", code: surprisedEyes },
      { type: "wink", code: winkEyes },
      { type: "angry", code: angryEyes }
    ]
  },
  {
    type: "Mouth",
    variant: "Warning",
    arr: [
      { type: "nomouth", code: null },
      { type: "wide-smile", code: wideSmile },
      { type: "normal-smile", code: normalSmile },
      { type: "wink-smile", code: winkSmile },
      { type: "confused", code: confusedSmile },
      { type: "happy-teeth", code: happyTeeth },
    ]
  }
];
