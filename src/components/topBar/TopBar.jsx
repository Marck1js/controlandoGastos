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
import SvgClothes from "../../icons/Clothes";
import SvgRent from "../../icons/Alquier";
import SvgSaving from "../../icons/Saving";
import SvgHealth from "../../icons/Health";
import SvgHoliday from "../../icons/Holiday";
import Overview from "../Card/Overview";

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
      {/* <TouchableOpacity
        className={`${styleCenter.alingSelf} h-10 w-[180] bg-red-200 rounded-md`}
      >
        <Text className="capitalize text-white font-bold">
          agregar nuevo gasto
        </Text>
      </TouchableOpacity> */}

      <Hr />

      <Overview/>



      <Gastos percent={10} bg={"FFCC00"} kind="entretenimiento">
        <SvgEntertainment fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"99FF99"} kind="comida">
        <SvgMeal fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"9999FF"} kind="transporte">
        <SvgClothes fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"FF99FF"} kind="alquiler">
        <SvgRent fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"FF9999"} kind="ropa">
        <SvgSaving fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"FF9933"} kind="salud">
        <SvgHealth fill="#fff" />
      </Gastos>
      <Gastos percent={10} bg={"99FF33"} kind="vacaciones">
        <SvgHoliday fill="#fff" />
      </Gastos>
    </>
  );
};

export default TopBar;
