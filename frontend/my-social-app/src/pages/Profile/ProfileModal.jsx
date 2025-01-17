import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { updateProfileAction } from '../../redux/Auth/auth.action';
import { Formik } from 'formik';


const style = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
  outline:"none",
  overFlow:"scroll-y",
  borderRadius:3,
};

export default function BasicModal({open,handleClose}) {
  const [open, setOpen] = React.useState(false);
  const formik=useFormik(
  {
    initialValues:{
       firstName:"",
       lastName:""
    },
    onSubmit:(values,)=>
    {
        console.log("values",values)
        dispatchEvent(updateProfileAction(values));
    },
  })
 
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose}>
                  <CloseIcon/>
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div>
              <div className='h-[15rem]'>
                <img className="w-full h-full rounded-t-md"src="https://cdn.pixabay.com/photo/2013/10/30/19/05/sunset-203188_1280.jpg" alt="" />
              </div>
              <div className='pl-5'>
                <Avatar className="transform -translate-y-24"
                sx={{width:"10rem",height:"10rem"}}
                src="https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_1280.jpg"/>
              </div>
            </div>
            <div className='space-y-3'>
               <Textfield
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}/>
               <Textfield
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
               />
            </div>
            
          </form>
        </Box>
      </Modal>
    </div>
  );
}


