import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ListComponent from "./ListComponents";
interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 90 },
  {
    field: "id",
    headerName: "ID",
    width: 90,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 600,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    type: "number",
    width: 600,
    editable: true,
  },
];

const UserData = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <>
      <div>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        ></DataGrid>
        <ListComponent />
      </div>
    </>
  );
};
export default UserData;
