import { ReactNode } from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col gap-4 p-4">
                {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
                <main>{children}</main>
            </div>
        </SidebarProvider>
    );
}
