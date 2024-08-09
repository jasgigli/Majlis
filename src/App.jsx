import React from "react";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import QuestionsAnswersSection from "./components/QuestionsAnswersSection";
// import OrganizationMembers from "./components/OrganizationMembers";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ChakraProvider>
        <Header />
        <NavigationBar />
        <main className="flex-grow">
          <Home />
          {/* <OrganizationMembers /> */}
          <QuestionsAnswersSection />
        </main>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
