import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCar, deleteCar, readCars } from "actions";
import { CarForm } from "components";
import './CarInventory.css';

const DEFAULT_FORM_DATA = { name: '', model: '', SKU: '', price: 0 };

const CarInventory = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.car.cars);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleFormChange = useCallback(({ target: { value, name } }) => {
    setFormData(data => ({
      ...data,
      [name]: value,
    }))
  }, []);

  const handleCreateCar = useCallback(() => {
    dispatch(createCar(formData));
  }, [dispatch, formData]);

  const handleDeleteCar = useCallback((carId) => {
    dispatch(deleteCar(carId));
  }, [dispatch]);

  const handleReset = useCallback(() => setFormData(DEFAULT_FORM_DATA), []);

  useEffect(() => dispatch(readCars()), [dispatch]);

  return (
    <div>
      <h2>Car Inventory</h2>
      <table id="inventory-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Model</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(({ _id, name, model, SKU, price }, idx) => (
            <tr key={_id}>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>{model}</td>
              <td>{SKU}</td>
              <td>{price}</td>
              <td>
                <button className="button" onClick={() => handleDeleteCar(_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CarForm data={formData} onChange={handleFormChange} />

      <div className="button-section">
        <button className="button" onClick={handleCreateCar}>
          ADD CAR
        </button>
        <button className="button" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  )
};

export default CarInventory;