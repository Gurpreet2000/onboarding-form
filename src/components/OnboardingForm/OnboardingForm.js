import React, { useState, useMemo } from 'react';
import './style.css';
import { eden_logo, completed_check, team, individual } from '../../assets';
import MultiStepProgressBar from './MultiStepProgressBar';
import MultiStepForm from './MultiStepForm';

const STEP_COUNT = 4;

const USES = {
	MYSELF: 'myself',
	TEAM: 'team',
};

const OnboardingForm = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const [fullName, setFullName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [workspaceName, setWorkspaceName] = useState('');
	const [workspaceUrl, setWorkspaceUrl] = useState('');
	const [use, setUse] = useState(USES.MYSELF);

	const STEP_DETAILS = useMemo(
		() => [
			{
				title: 'Welcome to the first thing!',
				subTitle: 'You can always change them later',
				inputs: [
					{ value: fullName, setValue: setFullName, label: 'Full Name', placeholder: 'Steve Jobs' },
					{
						value: displayName,
						setValue: setDisplayName,
						label: 'Display Name',
						placeholder: 'Steve',
					},
				],
			},
			{
				title: "Let's set up a homefor all your work",
				subTitle: 'You can always change them later',
				inputs: [
					{
						value: workspaceName,
						setValue: setWorkspaceName,
						label: 'Workspace Name',
						placeholder: 'Eden',
					},
					{
						value: workspaceUrl,
						setValue: setWorkspaceUrl,
						label: 'Workspace URL',
						placeholder: 'www.eden.com/		Example',
					},
				],
			},
			{
				title: 'How are you planning to use Eden?',
				subTitle: "We'll streamline your setup experience accordingly.",
				type: 'select',
				inputs: [
					{
						checked: use === USES.MYSELF,
						setValue: () => setUse(USES.MYSELF),
						title: 'For Myself',
						subTitle: 'Write better. Think more clearly. Stay organized',
						icon: individual,
					},
					{
						checked: use === USES.TEAM,
						setValue: () => setUse(USES.TEAM),
						title: 'With my team',
						subTitle: 'Wikis, docs, tasks & projects, all in one place',
						icon: team,
					},
				],
			},
			{
				title: `Congratulations, ${displayName}!`,
				subTitle: 'You have completed onboarding, you can start using Eden!',
			},
		],
		[fullName, displayName, workspaceUrl, workspaceName, use]
	);

	const nextStep = () => {
		if (currentStep !== STEP_COUNT - 1) setCurrentStep(currentStep + 1);
		else {
			setCurrentStep(0);
			setFullName('');
			setDisplayName('');
			setWorkspaceName('');
			setWorkspaceUrl('');
			setUse(USES.MYSELF);
		}
	};

	return (
		<div id="onboarding-form">
			<div className="container">
				<div className="logoContainer">
					<img src={eden_logo} />
					<span>Eden</span>
				</div>
				<MultiStepProgressBar />

				<div className="titleContainer">
					{currentStep === STEP_COUNT - 1 && <img src={completed_check} className="completedImg" />}
					<span className="title">{STEP_DETAILS[currentStep]?.title}</span>
					<span className="subTitle">{STEP_DETAILS[currentStep]?.subTitle}</span>
				</div>

				<MultiStepForm
					onSubmit={nextStep}
					inputs={STEP_DETAILS[currentStep]?.inputs}
					buttonTitle={currentStep !== STEP_COUNT - 1 ? 'Create WorkSpace' : 'Launch Eden'}
					type={STEP_DETAILS[currentStep]?.type}
				/>
			</div>
		</div>
	);
};

export default OnboardingForm;
