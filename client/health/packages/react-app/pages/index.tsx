import Layout from "@/components/Layout";
import { ReactElement, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import AddPatientDetailForm from "@/components/createForm";
import TableData from "@/components/table";

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        {/* <AddPatientDetailForm/> */}
        <TableData/>
        </>
    );
}


Home.getLayout = function getLayout(page:ReactElement) {
    return (
      <Layout>{page}</Layout>
    )
  }