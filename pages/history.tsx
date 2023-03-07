import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PassengerLayout from "@/components/layouts/PassengerLayout";
import { getRideHistory } from "@/services/passenger";
import { rideHistoryType } from "@/types";

const columns: GridColDef[] = [
  {
    field: "driver_profile_pic",
    headerName: "",
    width: 150,
    renderCell: (params) => (
      <img
        src={params.value}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
    ),
  },
  { field: "driver_first_name", headerName: "Driver Name", width: 300 },
  { field: "location", headerName: "Location", width: 300 },
  { field: "destination", headerName: "Destination", width: 300 },
  { field: "amount", headerName: "Amount", width: 300 },
  { field: "created_at", headerName: "Date", width: 300 },
];

const History = () => {
  const [tableData, setTableData] = useState<rideHistoryType[] | []>([]);

  const getHistory = async () => {
    const response = await getRideHistory();
    setTableData(response.message);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div
      style={{
        height: 400,
        overflowX: "auto",
      }}
    >
      <DataGrid
        getRowId={(row) => row.amount}
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{ textTransform: "capitalize" }}
      />
    </div>
  );
};

History.auth = true;
History.getLayout = PassengerLayout;
export default History;
