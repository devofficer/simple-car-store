import { createRecord } from "actions";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

const SellForm = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.car.cars);
  const [formData, setFormData] = useState({ car: '', buyer: '', date: moment().format('YYYY-MM-DD') });

  const handleFieldChange = useCallback(({ target: { name, value } }) => {
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  }, []);

  const handleSell = useCallback(() => {
    dispatch(createRecord(formData));
  }, [formData, dispatch]);

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>Sell Car</h2>

      <label htmlFor="car">&nbsp;Car:&nbsp;</label>
      <select name="car" value={formData.car} onChange={handleFieldChange}>
        <option value='' disabled>Select Car</option>
        {cars.map(({ _id, name }) => (
          <option value={_id} key={_id}>{name}</option>
        ))}
      </select>

      <label htmlFor="buyer">&nbsp;Buyer:&nbsp;</label>
      <input type="text" name="buyer" value={formData.buyer} onChange={handleFieldChange} />

      <label htmlFor="date">&nbsp;Date:&nbsp;</label>
      <input type="date" name="date" value={formData.date} onChange={handleFieldChange} />
      <br /><br />
      <button onClick={handleSell}>
        SELL
      </button>
    </div>
  );
};

export default memo(SellForm);