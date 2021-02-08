import { useCallback, useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

interface DimensionsScaledSizes {
  window: ScaledSize;
  screen: ScaledSize;
}

export default function useReactiveDimensions(): DimensionsScaledSizes {
  const [dimensions, setDimensions] = useState<DimensionsScaledSizes>({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  const onChange = useCallback((dimensions: DimensionsScaledSizes) => {
    setDimensions(dimensions);
  }, []);

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, [onChange]);

  return dimensions;
}
