
// import { Table } from '@mantine/core';
import Table from '../components/table/Table'
import {Head} from 'next/head';
import { MantineProvider, Text,Badge, Button } from '@mantine/core';

export default function HomePage() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <>
      {/* <Head>
        <title>Home - HomePage</title>
       </Head> */}
       <div>
         <Table/>
       </div>
    </>
    </MantineProvider>
  )
}