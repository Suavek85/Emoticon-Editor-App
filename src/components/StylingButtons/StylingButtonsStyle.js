import { normalEyes, winkEyes, surprisedEyes, happyEyes, angryEyes, cryingEyes, normalEyesREd } from "./StylingCode/EmoEyes";
import { wideSmile, normalSmile, confusedSmile, happyTeeth, winkSmile, sadSmile } from "./StylingCode/EmoMouth";

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
      { type: "normal-eyes", code: normalEyes },
      { type: "normal-eyes-red", code: normalEyesREd },
      { type: "happy-eyes", code: happyEyes}, 
      { type: "crying-eyes", code: cryingEyes },
      { type: "angry", code: angryEyes },
      { type: "surprised", code: surprisedEyes },
      { type: "winking", code: winkEyes }
    ]
  },
  {
    type: "Mouth",
    variant: "Warning",
    arr: [
      { type: "nomouth", code: null },
      { type: "normal-smile", code: normalSmile },
      { type: "wide-smile", code: wideSmile },
      { type: "sad", code: sadSmile },
      { type: "happy-teeth", code: happyTeeth },
      { type: "wink-smile", code: winkSmile },
      { type: "confused", code: confusedSmile },
     
    ]
  }
];
