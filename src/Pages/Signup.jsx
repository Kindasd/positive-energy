import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Signup2 from "../Pages/Signup2"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> SIGN UP</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div style={{display:"flex"}}>
          <TextField style={{padding:"10px"}} id="outlined-basic" label="First Name" variant="outlined" />
          <TextField style={{padding:"10px"}} id="filled-basic" label="Last Name" variant="filled" />
          </div>
          <TextField style={{marginLeft:"70px"}} id="filled-basic" label="Password" variant="filled" />

          <button style={{backgroundColor:"black",color:"white",width:"150p",marginTop:"25px",marginLeft:"100px"}}>Creat account</button>  

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
            <Signup2/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
