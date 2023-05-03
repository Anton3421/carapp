import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import { DialogTitle } from '@mui/material'
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';



export default function AddCar({ addCar }) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        price: '',
        year: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const inputChanged = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    }

    const saveCar = () => {
        addCar(car);
        setCar({...car, brand: ''})
        setCar({...car, model: ''})
        setCar({...car, color: ''})
        setCar({...car, fuel: ''})
        setCar({...car, price: ''})
        setCar({...car, year: ''})
        setOpen(false)
    }
    const handleClose = (event, reason) => {
        if(reason !== 'backdropClick'){
        setOpen(false)
        }
    };

    return (
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Add car
            </Button>

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Add Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus={true}
                        name="brand"
                        value={car.brand}
                        onChange={inputChanged}
                        margin="dense"
                        label="Brand"
                        fullWidth={true}
                        variant="standard"
                    />
                    <TextField
                        autoFocus={true}
                        name="model"
                        value={car.model}
                        onChange={inputChanged}
                        margin="dense"
                        label="Model"
                        fullWidth={true}
                        variant="standard"
                    />
                    <TextField
                        autoFocus={true}
                        name="color"
                        value={car.color}
                        onChange={inputChanged}
                        margin="dense"
                        label="Color"
                        fullWidth={true}
                        variant="standard"
                    />
                    <TextField
                        autoFocus={true}
                        name="fuel"
                        value={car.fuel}
                        onChange={inputChanged}
                        margin="dense"
                        label="Fuel"
                        fullWidth={true}
                        variant="standard"
                    />
                    <TextField
                        autoFocus={true}
                        name="year"
                        value={car.year}
                        onChange={inputChanged}
                        margin="dense"
                        label="Year"
                        fullWidth={true}
                        variant="standard"
                    />
                    <TextField
                        autoFocus={true}
                        name="price"
                        value={car.price}
                        onChange={inputChanged}
                        margin="dense"
                        label="Price"
                        fullWidth={true}
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={saveCar}>Save</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}
