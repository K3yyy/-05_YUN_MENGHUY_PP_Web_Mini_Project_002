import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllTasks } from "@/services/taskService";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default async function TaskList() {
  const data = await getAllTasks();
  console.log(data);

  return (
    <div className="mt-8 space-y-4 gap-10 flex">
      {data.map((task) => (
        <div key={task?.taskId} className="border border-gray-300 rounded-xl">
          <div className="p-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold capitalize">
                {task?.taskTitle}
              </h2>
              <Ellipsis />
            </div>

            {/* Task details */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
              {task?.taskDetails || "No description available"}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* Tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {task?.tag.toUpperCase()}
              </p>

              {/* Status Indicator */}
              <div
                className={`rounded-full w-8 h-8 ${
                  task?.status === "NOT_STARTED"
                    ? "bg-red-500"
                    : task?.status === "IN_PROGRESS"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              ></div>
            </div>
          </div>

          {/* Progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <Select>
              <SelectTrigger
                className={`w-36 truncate border-$
                  {task.status === "NOT_STARTED" ? "red-500" : 
                   task.status === "IN_PROGRESS" ? "yellow-500" : 
                   "green-500"} text-$
                  {task.status === "NOT_STARTED" ? "red-500" : 
                   task.status === "IN_PROGRESS" ? "yellow-500" : 
                   "green-500"}`}
              >
                <SelectValue placeholder={task?.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                <SelectItem value="FINISHED">FINISHED</SelectItem>
              </SelectContent>
            </Select>

            {/* Date */}
            <p className="flex gap-3 text-light-steel-blue">
              <Clock size={22} /> {new Date(task?.endDate).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
