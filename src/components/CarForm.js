import { memo } from "react";

const CarForm = ({ data, onChange }) => (
  <div style={{ marginBottom: 24 }}>
    <label htmlFor="name">&nbsp;Name:&nbsp;</label>
    <input type="text" name="name" value={data.name} onChange={onChange} />

    <label htmlFor="model">&nbsp;Model:&nbsp;</label>
    <input type="text" name="model" value={data.model} onChange={onChange} />
    <br />
    <br />
    <label htmlFor="SKU">&nbsp;SKU:&nbsp;</label>
    <input type="text" name="SKU" value={data.SKU} onChange={onChange} />

    <label htmlFor="price">&nbsp;Price:&nbsp;</label>
    <input type="number" name="price" value={data.price} onChange={onChange} />
  </div>
);

export default memo(CarForm);