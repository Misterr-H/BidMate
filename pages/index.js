import Head from 'next/head'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useEffect, useState} from "react";
import Lender from "@/containers/Lender";
import Borrower from "@/containers/Borrower";
import {UIStore} from "@/store/store";
import {useRouter} from "next/router";


export default function Home() {
    const router = useRouter();
    const [value, setValue] = useState('1');
    const login = UIStore.useState(s => s.login);

    if(!login) {
        if(typeof window !== 'undefined') {
            router.push('/login');
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
      <>
          <Head>
            <title>BidMate</title>
          </Head>
          <div className={'bg-gray-300 h-screen'}>
              <TabContext value={value}>
                  <div className={'bg-white shadow border-b-1 border-black'}>
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="As Lender" value="1" />
                        <Tab label="As Borrower" value="2" />
                    </TabList>
                  </div>
                <TabPanel value="1">
                    <Lender name={'Himanshu'}/>
                </TabPanel>
                <TabPanel value="2">
                    <Borrower/>
                </TabPanel>
              </TabContext>
          </div>
      </>
  )
}
