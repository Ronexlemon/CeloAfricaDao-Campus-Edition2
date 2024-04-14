import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';

interface PatientData {
    name: string;
    bill: number;
    disease: string;
    age: number;
    gender: string;
    condition: string;
    status: boolean;
}

export type PatientDataProps = {
    patientData: PatientData[];
}


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const data: PatientData[] =[{'name':'john doe','bill':256,'disease':"malaria",'age':40,'gender':'Male','condition':"worse",'status':true},
  {'name':'john doe','bill':256,'disease':"malaria",'age':40,'gender':'Male','condition':"worse",'status':true},
  {'name':'john doe','bill':256,'disease':"malaria",'age':40,'gender':'Male','condition':"worse",'status':true},
  {'name':'john doe','bill':256,'disease':"malaria",'age':40,'gender':'Male','condition':"worse",'status':true},
  {'name':'john doe','bill':256,'disease':"malaria",'age':40,'gender':'Male','condition':"worse",'status':true}
  ]

  //string memory _name,uint256 _amountToPay,uint256 _patientId,string memory _diseaseDiagnose,uint256 _age,string memory _gender,string memory _condition

const TableData =()=>{

    return(
        <>
        <div className="h-screen  w-screen overflow-auto p-10 ">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Bill Amount</TableCell>
            <TableCell align="right">PatientID</TableCell>
            <TableCell align="right">Disease</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.bill}</TableCell>
              <TableCell align="right">{row.disease}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.condition}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right" className="gap-4 m-2">
              <Stack direction="row" spacing={2}>

                                    <Button variant="contained" color="success"  >Pay Bill</Button>
                                    <Button variant="contained" color="error" >REMOVE</Button>
                                    </Stack>
                                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
        </>
    )
}

export default TableData;