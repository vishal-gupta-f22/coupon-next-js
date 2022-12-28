
import './App.css'
import { MantineProvider, Text,Badge, Button } from '@mantine/core';
import Table from './components/table/Table';
import { ApiCall } from './utils/ApiMethods';


function App() {
  console.log(ApiCall.getInstance())
  // ApiCall.get()
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <Table /> */}
      
    </MantineProvider>
  )
}

export default App
