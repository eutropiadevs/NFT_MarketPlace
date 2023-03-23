import React from 'react'
import './form.scss'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText || name}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				value={value}
				placeholder={name}
				onChange={handleChange}
				className="form-input"
			/>
		</div>
	);
};
export default FormRow;
