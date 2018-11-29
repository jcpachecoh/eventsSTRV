import * as React from 'react';
import { appLabels } from '../../../constants/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LeftBanner } from '../LeftBanner';
import { handlePasswordRepeat, redirectToLogin } from '../../../actions/usersActions';
import {
	handleEmail,
	handlePassword,
	UsersActions,
	handleLastName,
	handleFirstName,
	submitSignUp
} from '../../../actions/usersActions';
import HeaderH2 from '../../HeaderH2';

interface ISignUpProps {
	firstName: string;
	firstNameError: string;
	lastName: string;
	lastNameError: string;
	email: string;
	emailError: string;
	password: string;
	passwordError: string;
	passwordRepeat: string;
	handleFirstName: Function;
	handleLastName: Function;
	handleEmail: Function;
	handlePassword: Function;
	handlePasswordRepeat: Function;
	submitSignUp: Function;
	redirectToLogin: Function;
  showError: boolean;
  store?: any;
}

class SignUp extends React.Component<ISignUpProps, {}> {
	public render() {
		const {
			firstName,
			firstNameError,
			lastName,
			lastNameError,
			email,
			emailError,
			password,
			passwordError,
			passwordRepeat,
			handleFirstName,
			handleLastName,
			handleEmail,
			handlePassword,
			handlePasswordRepeat,
			showError,
			redirectToLogin,
			submitSignUp
		} = this.props;
		return (
			<div className="sign-up-container">
				<LeftBanner />
				<div className="right-banner">
					<div className="signup-form">
						<div className="signup-header">
							<HeaderH2 title="Get started absolutely free" />
							{showError && <span className="error-span">{showError}</span>}
							{!showError && <span>Enter your details below</span>}
						</div>
						<div className="input-box">
							<label>{appLabels.firstName}</label>
							<input
								type="text"
								value={firstName}
								onChange={(e: any) => handleFirstName(e.target.value)}
							/>
							{firstNameError && <span className="error-span">{firstNameError}</span>}
						</div>
						<div className="input-box">
							<label>{appLabels.lastName}</label>
							<input type="text" value={lastName} onChange={(e: any) => handleLastName(e.target.value)} />
							{lastNameError && <span className="error-span">{lastNameError}</span>}
						</div>
						<div className="input-box">
							<label>{appLabels.emailLabel}</label>
							<input type="email" value={email} onChange={(e: any) => handleEmail(e.target.value)} />
							{emailError && <span className="error-span">{emailError}</span>}
						</div>
						<div className="input-box">
							<label>{appLabels.passwordLabel}</label>
							<input
								type="password"
								value={password}
								onChange={(e: any) => handlePassword(e.target.value)}
							/>
							{passwordError && <span className="error-span">{passwordError}</span>}
						</div>
						<div className="input-box">
							<label>{appLabels.passwordRepeatLabel}</label>
							<input
								type="password"
								value={passwordRepeat}
								onChange={(e: any) => handlePasswordRepeat(e.target.value)}
							/>
						</div>
						<div className="sign-in-text">
							<span>Already have an account </span>
							<a href="" onClick={() => redirectToLogin()}>
								SIGN IN
							</a>
						</div>
						<div className="button-box">
							<button onClick={() => submitSignUp()}>SIGN UP</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

type ConnectedStateProps = Pick<
	ISignUpProps,
	| 'firstName'
	| 'lastName'
	| 'email'
	| 'password'
	| 'firstNameError'
	| 'lastNameError'
	| 'emailError'
	| 'passwordError'
	| 'passwordRepeat'
	| 'showError'
>;
export function mapStateToProps({
	userReducer: {
		firstName,
		lastName,
		email,
		password,
		firstNameError,
		lastNameError,
		emailError,
		passwordError,
		showError,
		passwordRepeat
	}
}: any): ConnectedStateProps {
	return {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		passwordRepeat: passwordRepeat,
		showError: showError,
		firstNameError,
		lastNameError,
		emailError,
		passwordError
	};
}

type ConnectedDispatchProps = Pick<
	ISignUpProps,
	| 'handleFirstName'
	| 'handleLastName'
	| 'handleEmail'
	| 'handlePassword'
	| 'handlePasswordRepeat'
	| 'submitSignUp'
	| 'redirectToLogin'
>;

export function mapDispatchToProps(dispatch: Dispatch<UsersActions>): ConnectedDispatchProps {
	return {
		handleFirstName: (value: string) => dispatch(handleFirstName(value)),
		handleLastName: (value: string) => dispatch(handleLastName(value)),
		handleEmail: (value: string) => dispatch(handleEmail(value)),
		handlePassword: (value: string) => dispatch(handlePassword(value)),
		handlePasswordRepeat: (value: string) => dispatch(handlePasswordRepeat(value)),
		submitSignUp: () => dispatch(submitSignUp()),
		redirectToLogin: () => dispatch(redirectToLogin())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
