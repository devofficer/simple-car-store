import { readRecords } from "actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import './RecordTable.css';


const RecordTable = () => {
  const dispatch = useDispatch();
  const records = useSelector(state => state.record.records);
  const cars = useSelector(state => state.car.cars);

  useEffect(() => dispatch(readRecords()), [dispatch]);

  return (
    <div>
      <h2>Car Transactions</h2>
      <table id="record-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Car</th>
            <th>Buyer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map(({ _id, car, buyer, date }, idx) => (
            <tr key={_id}>
              <td>{idx + 1}</td>
              <td>{cars.find(c => c._id === car).name}</td>
              <td>{buyer}</td>
              <td>{moment(date).format('YYYY-MM-DD')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default RecordTable;