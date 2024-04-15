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
import { useReadContract, useWriteContract } from "wagmi";
import { HealthContractAddress } from "@/constant/address/address";
import HealthAbi from "../constant/abi/healthAbi.json"
import { BigNumber, ethers } from "ethers";
import { writeContract } from "viem/actions";
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// string name;
// uint patientIndex;
// uint patientId;
// uint amountToPay;
// string diseaseDiagnose;
//  uint256 age;
// string gender;
// string condition;
// bool isPaid;

interface PatientData {
    name: string;
    amountToPay: number;
    patientId:number;
    patientIndex:number;
    diseaseDiagnose: string;
    age: number;
    gender: string;
    condition: string;
    isPaid: boolean;
}

export type PatientDataProps = {
    patientData: PatientData[];
}



  

  //string memory _name,uint256 _amountToPay,uint256 _patientId,string memory _diseaseDiagnose,uint256 _age,string memory _gender,string memory _condition

const TableData =()=>{
    const { data: hash2, writeContract } = useWriteContract() 
    
    const itemdata = useReadContract({
        abi:HealthAbi,
        address: HealthContractAddress,
        functionName: 'getAllDetails',
        
    
      })
      const dataArray:PatientData[]  = Array.isArray(itemdata.data) ? itemdata.data : [];
      console.log("the data is data data array contract",dataArray)

      const handleRemove = (itemId: number) => {
        console.log("working with deleting",itemId);
        try{
            console.log("Removing item with ID:", itemId);
        writeContract({
          address: HealthContractAddress,
          abi:HealthAbi,
          functionName: 'removePatientDetail',
          args: [itemId],
        });

        }catch(error){
            console.log("error deleting",error);
        }
        // Call your function here
        
      };
      const handlePayment = (itemId: number,amount:number) => {
        console.log("working with deleting",itemId);
        try{
            console.log("Removing item with ID:", itemId);
        writeContract({
          address: HealthContractAddress,
          abi:HealthAbi,
          functionName: 'makeBillPayment',
          args: [amount,itemId],
          value:BigInt(amount)
        });

        }catch(error){
            console.log("error deleting",error);
        }
        // Call your function here
        
      };

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
            <TableCell align="right">Paid?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArray.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">$ {(ethers.utils.formatEther(row.amountToPay))}</TableCell>
              <TableCell align="right">{row.diseaseDiagnose}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.condition}</TableCell>
              <TableCell align="right">{row.isPaid?<h1>Paid</h1>:<h1>Waiting</h1>}</TableCell>
              <TableCell align="right" className="gap-4 m-2">
              <Stack direction="row" spacing={2}>

                                    <Button variant="contained" color="success"  onClick={()=>handlePayment(index,Number(ethers.utils.formatEther(row.amountToPay)))}  >Pay Bill</Button>
                                    <Button variant="contained" color="error"  onClick={()=>handleRemove(index)} >REMOVE</Button>
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