import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
       field:"avatar",headerName:"Avatar",width:100,
        renderCell: (params)=>{
          return <img src={params.row.img || "/noavatar.png"} alt="" />
        }

  },
  
 
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    
  },
  {
    field: 'createdAt',
    headerName: 'Creadted At',
    width: 150,
    
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: "boolean",
  },
  { 
    field:"actions",headerName:"Actions",width:100,
     renderCell: (params)=>{
       return <div className="action">
        <div className="view">View</div>
        <div className="delete">Delete</div>
       </div>

     },

},
];

const Users = () => {
  return (
    <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button>Add New User</button>
          </div>
         < DataTable columns={columns} rows={userRows}/>
</div>


    
  )
}

export default Users