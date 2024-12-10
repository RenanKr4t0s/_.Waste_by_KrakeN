import React from "react";
import Svg, { Rect, Line } from "react-native-svg";

const BarcodeIcon = ({ width = 50, height = 30 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 30" fill="none">
      {/* Moldura */}
      <Rect x="0" y="0" width="50" height="30" stroke="black" strokeWidth="2" />
      
      {/* Linhas do código de barras */}
      <Line x1="5" y1="5" x2="5" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="8" y1="5" x2="8" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="11" y1="5" x2="11" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="14" y1="5" x2="14" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="17" y1="5" x2="17" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="20" y1="5" x2="20" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="23" y1="5" x2="23" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="26" y1="5" x2="26" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="29" y1="5" x2="29" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="32" y1="5" x2="32" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="35" y1="5" x2="35" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="38" y1="5" x2="38" y2="25" stroke="black" strokeWidth="1" />
      <Line x1="41" y1="5" x2="41" y2="25" stroke="black" strokeWidth="2" />
      <Line x1="44" y1="5" x2="44" y2="25" stroke="black" strokeWidth="1" />
    </Svg>
  );
};

export default BarcodeIcon;
