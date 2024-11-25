import { AppSidebar } from "@/components/sidebar/componenets/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import React from "react";
import { Outlet } from "react-router-dom";

const SlidesLayout = () => {
  return (
    <div >
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
          </header>

          <div className="flex flex-1 p-4 pt-0">
            <div className="flex-1">{<Outlet />}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default SlidesLayout;