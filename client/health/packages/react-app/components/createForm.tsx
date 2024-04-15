import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useWriteContract } from "wagmi";
import { HealthContractAddress} from "@/constant/address/address"
import HealthAbi from "../constant/abi/healthAbi.json"
import { ethers } from "ethers";
const AddPatientDetailForm = () => {
  const { register, handleSubmit } = useForm();
  const { data: hash, writeContract } = useWriteContract(); 
  
  const [openProgress,setOpenProgress] = useState<boolean>(false);
  const onSubmit = async (formData:any) => {
    //string memory _name,uint256 _amountToPay,uint256 _patientId,string memory _diseaseDiagnose,uint256 _age,string memory _gender,string memory _condition
    setOpenProgress(true);
    try{
        writeContract({
            address: HealthContractAddress,
            abi:HealthAbi,
            functionName: 'addPatientDetails',
            args: [formData.name, ethers.utils.parseEther(formData.bill), formData.pid,formData.disease ,formData.age,formData.gender,formData.condition],
          });
          setTimeout(() => {
            setOpenProgress(false);
        }, 10000);


    }catch(error){
        console.log("error sending data",error)
        setOpenProgress(false);

    }
    
    
    
  };
  //string memory _name,uint256 _amountToPay,uint256 _patientId,string memory _diseaseDiagnose,uint256 _age,string memory _gender,string memory _condition

  return (
    <>
      <div className="h-screen  w-screen flex justify-center items-center relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-3/4 h-3/4 flex flex-col justify-around bg-black rounded-2xl "
        >
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Name</label>
            <input
              type="text"
              placeholder="Urus"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Bill Amount</label>
            <input
              type="number"
              placeholder="$ 1"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("bill", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Patient Id</label>
            <input
              type="number"
              placeholder="1234"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("pid", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">DiseaseDiagnose</label>
            <input
              type="text"
              placeholder="Malaria"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("disease", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Age</label>
            <input
              type="number"
              placeholder="24"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("age", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Gender</label>
            <input
              type="text"
              placeholder="Male/Female/Other"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("gender", { required: true })}
            />
          </div>
          <div className="flex justify-around items-center mt-2">
            <label className="text-white">Condition</label>
            <input
              type="text"
              placeholder="Worse/Fatal/Critical/Good"
              className="w-1/2 bg-slate-200 text-center h-10 rounded-2xl"
              {...register("condition", { required: true })}
            />
          </div>
          <div className="flex justify-end mr-10 items-center mt-2 text-white">
            <button
              type="submit"
              className="bg-green-500 w-16 h-10 rounded-xl "
            >
              Submit
            </button>
          </div>
        </form>
        {openProgress &&(
             <div className="flex justify-center items-center absolute top-1/2 bg-white h-1/4 w-1/4">
             <Box sx={{ display: 'flex' }}>
             <CircularProgress color="secondary" />
     <CircularProgress color="success" />
     <CircularProgress color="inherit" />
     <h1>Loading ...</h1>
         </Box>
     
             </div>

        )}
       
      </div>
    </>
  );
};

export default AddPatientDetailForm;
