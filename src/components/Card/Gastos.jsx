import { View, Text } from "react-native";
import React from "react";
import { styleCenter } from "../../customStyle";
import SvgEntertainment from "../../icons/Entertainment";

export default function Gastos({ bg ,kind='entertainment',percent = 61.5, children }) {
  return (
    <View
      className={`${styleCenter.spaceBetween} h-[50] px-[10px] mt-[10px] bg-white-100`}
    >
      <View className={`${styleCenter.horizontal}`}>
        <View
            style={{backgroundColor: bg ? `#${bg}` : '#000'}}
          className={`
          h-[40] w-[40]  rounded-[50px]
          ${styleCenter.center}
          `}
        >
          {/* Icon svg  */}
          {children}
        </View>
        <Text className="text-[18px] text-black capitalize">{kind}</Text>
      </View>
      <Text>{typeof percent == "number" ? percent.toFixed(2) : percent}%</Text>
    </View>
  );
}
