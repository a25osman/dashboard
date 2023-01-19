import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from './Badge';
import Grid from '@mui/material/Grid';

interface Api_Badge {
  _badge: {
    name: string;
    value: string;
    unit: string;
  }
}

const DashboardList: React.FC = () => {
    // This component renders all badges stored in the dataStruct.json file located in the /public/db directory
    const [badges, setBadges] = useState<Api_Badge[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("/db/dataStruct.json", {signal: controller.signal})
            .then(res => {
                setBadges(res.data.content);
            })
            .catch(err => {
                console.log(err);
            })
        ;

        return () => {
            controller.abort();
        }
    }, [])

  return (
    <Grid container spacing={4}>
        {badges.map((badge) => {
            return (
                <Grid item xs={12} sm={6} md={4} xl={3} key={badge._badge.name} sx={{height: 150}}>
                    <Badge
                        name={badge._badge.name}
                        value={badge._badge.value}
                        unit={badge._badge.unit}
                    />
                </Grid>
            )
        })}
    </Grid>
    
  )
}

export default DashboardList