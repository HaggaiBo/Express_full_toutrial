import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
        <Button onClick={()=>navigate("/addBook")}>Link</Button>
    </div>
  )
}
