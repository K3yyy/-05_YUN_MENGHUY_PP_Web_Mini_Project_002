import headerToken from "./../lib/headerToken";

export const getAllWorkspace = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      method: "GET",
      headers,
    }
  );

  const tasks = await response.json();
  return tasks.payload;
};

// export const getAllTaskByWorkspaceId = async () => {
//   const headers = await headerToken();
//   const response = await fetch(
//     `http://96.9.81.187:8080/api/v1/tasks/workspace/310a842d-10c3-49b9-b557-b46d6902ae2e?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
//     {
//       method: "GET",
//       headers,
//     }
//   );

//   const tasks = await response.json();
//   return tasks.payload;
// };
