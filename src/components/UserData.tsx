import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
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

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
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
