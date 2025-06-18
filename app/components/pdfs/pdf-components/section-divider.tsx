import { Line, Svg, View } from "@react-pdf/renderer";

export const SectionDivider = () => {
  return (
    <View style={{marginVertical: 6 }}>
      <Svg width="100%" height="5">
        <Line
          x1="0" // Start at the left edge
          y1="0" // Start at the desired vertical position
          x2="1000" // End at the right edge
          y2="0"  // End at the same vertical position
          stroke='black'
          strokeWidth={4}
        />
        <Line
          x1="0" // Start at the left edge
          y1="4" // Start at the desired vertical position
          x2="1000" // End at the right edge
          y2="4"  // End at the same vertical position
          stroke='black'
          strokeWidth={1}
        />
      </Svg>
    </View>
  );
}