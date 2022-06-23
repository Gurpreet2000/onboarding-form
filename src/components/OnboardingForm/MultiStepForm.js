import React from 'react';

const MultiStepForm = ({ onSubmit, inputs = [], buttonTitle, type }) => {
	const renderSelect = () => (
		<div style={{ display: 'flex' }}>
			{inputs.map((item, i) => (
				<div
					key={i}
					className={`select ${item?.checked ? 'checked' : ''}`}
					onClick={item?.setValue}
				>
					<img src={item?.icon} />
					<span>{item?.title}</span>
					<span className="subTitle">{item?.subTitle}</span>
				</div>
			))}
		</div>
	);

	const renderInputs = () =>
		inputs.map((item, i) => (
			<label key={i}>
				{item?.label}
				<input
					placeholder={item?.placeholder}
					value={item?.value}
					onInput={e => item?.setValue(e.target.value)}
				/>
			</label>
		));

	return (
		<div id="multi-step-form">
			{Array.isArray(inputs) && type === 'select' ? renderSelect() : renderInputs()}
			<button onClick={onSubmit}>{buttonTitle}</button>
		</div>
	);
};

export default MultiStepForm;
