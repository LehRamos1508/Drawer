import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStack" component={StackRoutes} />

      <Drawer.Screen name="Sobre" component={StackRoutes} />
      <Drawer.Screen name="Contato" component={StackRoutes} />
    </Drawer.Navigator>
  );
}
