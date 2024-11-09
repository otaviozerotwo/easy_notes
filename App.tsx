import { useEffect, useState } from "react";
import { Home } from "./src/screens/Home";
import { initializeDb } from "./src/services/db";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDb();
      setDbInitialized(true);
    }

    setup();
  }, []);

  if (!dbInitialized) {
    return (
      <SafeAreaView>
        <Text>Carregando...</Text>
      </SafeAreaView>
    )
  }
  
  return (
    <Home />
  );
}