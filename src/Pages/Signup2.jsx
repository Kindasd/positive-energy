import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Signup from "../Pages/Signup";


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
      <Button onClick={handleOpen}> Forget password ? Creat account</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <TextField style={{marginLeft:"70px",marginBottom:"10px"}} id="filled-basic" label="Email" variant="filled" />
          <TextField style={{marginLeft:"70px"}} id="filled-basic" label="Password" variant="filled" />

          <button style={{backgroundColor:"black",color:"white",width:"150p",marginTop:"25px",marginLeft:"100px"}}>Creat account</button>  

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
        
        
          <Signup/>
          </Typography>
        </Box>
      </Modal>
    </div>
)};