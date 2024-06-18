import React from 'react'
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



interface Props {
    name:string;
    region: string;
    population: number;
    flag: string;
    capital: string;
  }
  

const Card = ({name,region, population, flag, capital}: Props) => {
  return (

    <MUICard sx={{ width: "20vw" , marginBottom: "2rem"}}>
    <CardMedia
      sx={{ height: "20vh" }}
      image={flag}
      title="flags"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"1rem", fontWeight:700}}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <b>Population:</b> {population}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <b>Region:</b> {region}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <b>Capital:</b> {capital}
      </Typography>
    </CardContent>
  </MUICard>
  )
}

export default Card