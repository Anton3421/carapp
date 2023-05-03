import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { DialogTitle } from "@mui/material";

export default function EditCar({ updateCar, params }) {
  const [open, setOpen] = React.useState(false);

  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    price: "",
    year: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setCar({
        brand: params.data.brand,
        model: params.data.model,
        color: params.data.color,
        fuel: params.data.fuel,
        year: params.data.year,
        price: params.data.price
    })
  };
  const handleSave = () => {
      console.log("YRITETÄÄN TALLENTAA!");
      updateCar(car, params.value);
  };
  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit Car
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            name="brand"
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            fullWidth={true}
            variant="standard"
            value={car.brand}
          />
          <TextField
            autoFocus={true}
            name="model"
            onChange={inputChanged}
            margin="dense"
            label="Model"
            fullWidth={true}
            variant="standard"
            value={car.model}
          />
          <TextField
            autoFocus={true}
            name="color"
            onChange={inputChanged}
            margin="dense"
            label="Color"
            fullWidth={true}
            variant="standard"
            value={car.color}
          />
          <TextField
            autoFocus={true}
            name="fuel"
            onChange={inputChanged}
            margin="dense"
            label="Fuel"
            fullWidth={true}
            variant="standard"
            value={car.fuel}
          />
          <TextField
            autoFocus={true}
            name="year"
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth={true}
            variant="standard"
            value={car.year}
          />
          <TextField
            autoFocus={true}
            name="price"
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth={true}
            variant="standard"
            value={car.price}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}