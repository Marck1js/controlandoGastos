import {
  View,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Gastos from "../Card/Gastos";
import SvgEntertainment from "../../icons/Entertainment";
import SvgMeal from "../../icons/Meal";
import { styleCenter } from "../../customStyle";
import Hr from "../commons/Hr";

const TopBar = () => {
  const widthAndHeight = 160;

  const status = [
    {
      value: 80,
      color: "#fbd203",
    },
    {
      value: 10,
      color: "#af3d2c",
    },
    {
      value: 80,
      color: "#0bd21c",
    },
  ];
  return (
    <>
      <TouchableOpacity
        className={`${styleCenter.alingSelf} h-10 w-[180] bg-red-200 rounded-md`}
      >
        <Text className="capitalize text-white font-bold">
          agregar nuevo gasto
        </Text>
      </TouchableOpacity>


      <Hr />

      <Gastos percent={10} bg={"45ca4d"} kind="Entertainment">
        <SvgEntertainment fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"ff231c"} kind="Foods">
        <SvgMeal fill="#fff" />
      </Gastos>
    </>
  );
};

export default TopBar;
