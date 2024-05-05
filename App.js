import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import TopBar from "./src/components/topBar/TopBar";
import SvgSearch from "./src/icons/Search";
import { styleCenter } from "./src/customStyle";

export default function App() {
  return (
    <>
      <View style={{ height: 50 }}></View>
      <SafeAreaView className="flex-1 bg-[#D7DBDD]">
        {/* <View className="mb-[10px] border-red-200 border-[3px] bg-white flex-row mx-[10] gap justify-center items-center">
          <TextInput className="flex-1" />
          <SvgSearch />
        </View> */}

        {/* <View
          className={`${styleCenter.center} h-[100] mx-[10px] bg-[#fff] rounded-lg`}
        >
          <Text className="text-[32px] text-green-400">
            ${Number(12340).toFixed(2)}
          </Text>
          <Text className="italic text-black text-[12px]">
            Dinero Disponible
          </Text>
        </View> */}

        <TopBar />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});
