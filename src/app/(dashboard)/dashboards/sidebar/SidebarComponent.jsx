import { Button } from "@/components/ui/button";
import { getAllWorkspace } from "@/services/workSpace";
import { Link, LogOut } from "lucide-react";
import React from "react";

export default async function SidebarComponent() {
  const data = await getAllWorkspace();
  console.log(data);
  return (
    <aside className="hidden w-64 md:block min-h-screen translate-y-[-50px] ">
      <div className="py-3 text-2xl mt-18 uppercase text-center tracking-widest mb-8">
        <h1 className="font-bold text-3xl text-center">
          Plan<span className="text-watermelon-red">I</span>t
        </h1>
      </div>
      <ul>
        <li className="flex items-center justify-between px-4 pt-8 py-2  uppercase text-lg tracking-wider text-gray-500 font-bold">
          <span>Workspace</span>
        </li>
      </ul>
      {data.map((item) => (
        <nav key={item.workspaceId} className="text-sm">
          <ul className="flex flex-col">
            <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-300  font-bold flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot-icon lucide-dot"
                >
                  <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
                </svg>
              </div>
              <div className="flex items-center justify-between flex-grow">
                <span>{item?.workspaceName}</span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-ellipsis-icon lucide-ellipsis"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      ))}
      <ul>
        <li className="flex items-center justify-between px-4 pt-8 py-2  uppercase text-lg tracking-wider text-gray-500 font-bold">
          <span>Favorite</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star-icon lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>
        </li>
      </ul>

      <div className="flex  items-center ps-14 gap-2 pt-56">
        <Button className="flex gap-2 items-center justify-center bg-red-600 text-white py-2 px-4 rounded-lg">
          <LogOut size={20} /> Log Out
        </Button>
      </div>
    </aside>
  );
}
