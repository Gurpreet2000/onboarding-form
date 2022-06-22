import React, { useMemo, useState } from 'react';
import MultiStepProgress from './MultiStepProgress';
import { completed_check, eden_logo } from '../../assets';

const OnboardingForm = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const STEP_DETAILS = useMemo(
		() => [
			{ title: 'Welcome to the first thing!', subTitle: 'You can always change them later' },
			{
				title: "Let's set up a homefor all your work",
				subTitle: 'You can always change them later',
			},
			{
				title: 'How are you planning to use Eden?',
				subTitle: "We'll streamline your setup experience accordingly.",
			},
			{
				title: 'Congratulations, Name!',
				subTitle: 'You have completed onboarding, you can start using Eden!',
			},
		],
		[]
	);

	const lastStep = STEP_DETAILS.length - 1;

	const nextStep = () => (currentStep !== lastStep ? setCurrentStep(currentStep + 1) : null);

	return (
		<div id="onboarding-form" style={styles.container}>
			<div style={styles.logoContainer}>
				<img src={eden_logo} />
				<span>Eden</span>
			</div>
			<MultiStepProgress />
			<div style={styles.titleContainer}>
				{currentStep === lastStep && <img src={completed_check} style={styles.completedImg} />}
				<span style={styles.title}>{STEP_DETAILS[currentStep]?.title}</span>
				<span style={styles.subTitle}>{STEP_DETAILS[currentStep]?.subTitle}</span>
			</div>
			<div style={styles.form}>
				<button onClick={nextStep}>
					{currentStep !== lastStep ? 'Create WorkSpace' : 'Launch Eden'}
				</button>
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1rem 0',
	},
	title: {
		fontWeight: 'bold',
		fontSize: '2rem',
		textAlign: 'center',
	},
	subTitle: {
		color: 'grey',
		textAlign: 'center',
	},
	completedImg: {
		height: '3rem',
		width: '3rem',
		margin: '1rem 0',
		alignSelf: 'center',
	},
};

export default OnboardingForm;
