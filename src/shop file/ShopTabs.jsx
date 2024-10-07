

import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopDessert from '../DessertShop file/ShopDessert';
import PizzaShop from '../pizzaShop file/PizzaShop';

const ShopTabs = () => {

    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">

            <div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
            <Tab>Dessert</Tab>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            </TabList>
            <TabPanel> <ShopDessert></ShopDessert> </TabPanel>
            <TabPanel> <PizzaShop></PizzaShop> </TabPanel>
            <TabPanel> <PizzaShop></PizzaShop> </TabPanel>
            <TabPanel> <PizzaShop></PizzaShop></TabPanel>
            </Tabs>





            </div>
            
        </div>
    );
};

export default ShopTabs;