import { AppSidebar } from "@/components/app-sidebar";
import { AppTopbar } from "@/components/app-topbar";
export default function WorkspaceLayout({children}:{children:React.ReactNode}){return <div className="flex min-h-screen bg-[#07090d]"><AppSidebar/><div className="min-w-0 flex-1"><AppTopbar/><main className="mx-auto max-w-[1500px] p-4 sm:p-6 xl:p-8">{children}</main></div></div>}