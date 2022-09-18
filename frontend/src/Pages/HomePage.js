import React, { useEffect } from "react";
import { Tab, TabPanels, Tabs, TabList, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="min-h-screen  sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl z-20">
        <div className="self-start hidden lg:flex flex-col  text-white">
          <h1 className="mb-3 font-bold text-5xl">Hi Welcome to WEE Chat </h1>
          <p className="pr-3">
            Connect , Talk , Gossip only to the person you want.<b>Securly</b>
          </p>
        </div>
      </div>
      <div className="flex sm:z-20 justify-center self-center z-10 ">
        <div className="p-4 ml-[60px] bg-white mx-auto rounded-2xl w-[480px]">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="0.6em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
