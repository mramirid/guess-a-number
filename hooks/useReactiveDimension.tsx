import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

interface DimensionSizes {
  width: number;
  height: number;
}

interface DimensionsScaledSizes {
  window: ScaledSize;
  screen: ScaledSize;
}

export default function useReactiveDimension(
  dim: "window" | "screen",
): DimensionSizes {
  const [dimSizes, setDimSizes] = useState<DimensionSizes>({
    width: Dimensions.get(dim).width,
    height: Dimensions.get(dim).height,
  });

  useEffect(() => {
    const updateScale = ({ window }: DimensionsScaledSizes) => {
      setDimSizes(window);
    };
    Dimensions.addEventListener("change", updateScale);
    return () => Dimensions.removeEventListener("change", updateScale);
  }, []);

  return dimSizes;
}
