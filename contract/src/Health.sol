// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Health{
    //struct to captcha patient details
    struct Patient{
        string name;
        uint patientIndex;
        uint patientId;
        uint amountToPay;
        string diseaseDiagnose;
         uint256 age;
        string gender;
        string condition;
        bool isPaid;

    }

    //index to track number of patients
    uint256 public patientTrackIndex;

    //mapping index => patient struct
    mapping(uint => Patient)public patient;

    //function addDetails

    function addPatientDetails(string memory _name,uint256 _amountToPay,uint256 _patientId,string memory _diseaseDiagnose,uint256 _age,string memory _gender,string memory _condition)public{
        uint256 _index = patientTrackIndex;
        patient[_index] = Patient({name:_name,patientIndex:_index,patientId:_patientId,amountToPay:_amountToPay,diseaseDiagnose:_diseaseDiagnose,age:_age,gender:_gender,condition:_condition,isPaid:false});

        patientTrackIndex ++;
    }

    //function search for patient detail

    function searchPatientDetailsById(uint256 _patientId)public view returns(Patient[] memory pat){
        
        uint256 count=0;

        for(uint256 i=0;i < patientTrackIndex;i++){
            if(patient[i].patientId == _patientId){
                count ++;
            }
        }

        pat = new Patient[](count);

        uint _index=0;
        for(uint256 i=0;i < patientTrackIndex;i++){
            if(patient[i].patientId == _patientId){
                pat[_index] = patient[i];
                _index++;

            }
        }
        return pat;

        

    }

    //function get all details
    function getAllDetails()public view returns(Patient[] memory pat){
        pat = new Patient[](patientTrackIndex);        
        for(uint256 i=0;i < patientTrackIndex;i++){            
                pat[i] = patient[i];             

            
        }
        return pat;
    }

    //function remove detail

    function removePatientDetail(uint256 index) public {
        require(index <= patientTrackIndex, "Index out of bounds");
        

        // Shift items in the mapping to fill the gap left by the deleted item
        for (uint i = index; i < patientTrackIndex - 1; i++) {
            patient[i] = patient[i + 1];
        }
        
        // Delete the last item in the mapping
        delete patient[patientTrackIndex - 1];
        
        // Decrement itemIndex
        patientTrackIndex--;
    }

    //function make payment

    function makeBillPayment(uint amount,uint _index)public payable {
        require(msg.value >= amount,"no amout");
        patient[_index].isPaid = true;
    }
}