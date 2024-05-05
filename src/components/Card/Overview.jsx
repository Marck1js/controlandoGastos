import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SvgClothes from "../../icons/Clothes";
import { styleCenter, styleShadow } from "../../customStyle";
import SvgArrowUp from "../../icons/ArrowUp";

const Overview = () => {
  return (
    <View
      style={styles.shadow}
      className={`flex-row w-[180] h-[80] border-[1px] bg-gray-200 border-gray-400 ml-[5px] items-center rounded-md`}
    >
      <View className="pl-[10px] flex-1 items-start justify-center">
        <Text className="text-[14px] font-[600] capitalize italic">total income</Text>
        <Text className="text-[22px] font-bold text-green-500 capitalize">
          ${12983}
        </Text>
      </View>
      <View
        className={`${styleCenter.center} w-[40px] h-[40px] mr-[5] mt-[20px] `}
      >
        <SvgArrowUp fill="#228B22" />
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
