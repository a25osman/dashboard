import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
    name: string;
    value: string;
    unit: string;
}

const Badge: React.FC <Props> = ({ name, value, unit }) => {
  // This component renders the details of a single vehicle metric i.e. a single badge.
  // The prop "name" is the name/description of the vehicle metric.
  // The prop "value" is the numeric value associated with that vehicle metric.
  // The prop "unit" is metric unit of the numeric value e.g. A, kWh, kW, etc.
  
  return (
    <Card sx={{
        boxShadow: 1,
        borderRadius: 5,
        bgcolor: "#F8FBFB",
        height: "100%",
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
    }}>
        <CardContent sx={{height:"100%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
            {name.split(" ").map(word => (<Typography key={word}><b>{word}</b></Typography>))}
          </Box>
          <Typography><b>{value}</b>&nbsp;{unit}</Typography>
        </CardContent>
    </Card>
  )
}

export default Badge