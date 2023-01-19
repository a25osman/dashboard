import React from 'react';
import DashboardList from './components/DashboardList';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const App:React.FC = () => {
  
  return (
    <Stack sx={{p: 2}} direction="column">
      <Typography variant="h4" sx={{mt: "2%", mb: "3.5%", color:"gray"}}> 
        Vehicle Metrics:
      </Typography>
      <DashboardList />
    </Stack >
  )
}

export default App
