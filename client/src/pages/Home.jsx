import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Analytics from "./Analytics.jsx";
import { SidebarProvider, useSidebar } from "../context/SidebarContect.jsx";
import PieChart from "../components/Pichart.jsx";
import { ChartProvider } from "../context/ChartContext.jsx";


const MainContent = () => {
  const { isExpanded } = useSidebar();

  return (
    <div
      className={`transition-all duration-300 ${
        isExpanded ? "ml-64" : "ml-16"
      }  gap-5 bg-[#25293C] p-4 md:p-6 lg:p-8 w-full `}
    >
      <div className="relative mb-20 ">
        <Navbar />
      </div>
      <ChartProvider>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#25293C]">
          
        <div className="col-span-1">
        <Analytics />
        </div>
         
         

          <div className="col-span-1">
            <PieChart />
          </div>
       
      
        </div>
      </ChartProvider>
    </div>
  );
};

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#25293C]">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
}
