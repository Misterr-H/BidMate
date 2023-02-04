import Head from 'next/head'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from "react";
import Lender from "@/containers/Lender";
import Borrower from "@/containers/Borrower";
import Navbar from "@/components/Navbar";
import LandingPage from "@/containers/LandingPage";

export default function Home() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
      <>
          <Head>
            <title>BidMate</title>
          </Head>
          <LandingPage/>
          <Navbar/>
          <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="As Lender" value="1" />
                    <Tab label="As Borrower" value="2" />
                </TabList>
            <TabPanel value="1">
                <Lender name={'Himanshu'}/>
            </TabPanel>
            <TabPanel value="2">
                <Borrower/>
            </TabPanel>
          </TabContext>
      </>
  )
}
