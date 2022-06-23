import React from 'react';

const MultiStepProgressBar = ({ step = 1, stepCount = 1 }) => {
	const progressBarWidth = ((step + 1) / stepCount) * 100;
	const beforeAfterWidth = ((1 / stepCount) * 100) / 2;

	return (
		<div id="multi-step-progress-bar">
			<span className="steps-container">
				<span className="before" style={{ width: `${beforeAfterWidth}%` }} />
				{[...Array(stepCount).keys()].map((_, i) => (
					<span key={i} className={`step ${step >= i ? 'filled' : ''}`}>
						{i + 1}
					</span>
				))}
				<span className="after" style={{ width: `${beforeAfterWidth}%` }} />
			</span>

			<span className="progress-bar" style={{ width: `${progressBarWidth}%` }}></span>
		</div>
	);
};

export default MultiStepProgressBar;
