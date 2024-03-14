"use client"

import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from "@material-tailwind/react";
import { useState } from "react";

const tabsHeader = ["Descriptions", "Additional Information", "Reviews"];

const ProductTab = () => {
    const [activeTab, setActiveTab] = useState("Descriptions");

    const tabsData = [
        {
            label: "Descriptions",
            desc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam.</p>
        },
        {
            label: "Additional Information",
            desc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam.</p>
        },
        {
            label: "Reviews",
            desc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam.</p>
        },
    ]
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {tabsHeader.map((el) => (
                    <Tab
                        key={el}
                        value={el}
                        onClick={() => setActiveTab(el)}
                        className={`${activeTab === el ? "text-primary-500 font-semibold" : ""}  w-max text-nowrap pr-1 pb-2 mr-4 pl-0 text-left`}
                    >
                        {el}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {tabsData.map(({ label, desc }) => (
                    <TabPanel key={label} value={label} className="pl-0">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}

export default ProductTab