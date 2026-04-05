import { useState } from 'react'
import './Login.css'
import showPasswordIcon from './assets/showPassword.svg'
import logo from './assets/logo.svg'
import profilePerson from './assets/profilePerson.svg'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const HandleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            email,
            password,
            remember,
        }

        console.log('Dummy login submitted', payload)
        setAlertMessage(`Login submitted for ${email || 'unknown user'}. Welcome back!`)

        window.setTimeout(() => {
            setAlertMessage('')
        }, 3500)
    }
    return (
        <main className="login-page">
            <header className="login-header">
                <div className="brand">
                    <span className="brand-mark" aria-hidden="true">
                        <img src={logo} alt="SiteLogo" aria-hidden="true" />

                    </span>
                    <span className="brand-name">Minimal Shopping</span>
                </div>
                <button type="button" className="profile-button" aria-label="Profile">
                    
                        <img src={profilePerson} alt="Profile" aria-hidden="true" />

                </button>
            </header>
            <div className="login-card">
                <div className="login-copy">
                    <h1>Hello Again!</h1>
                    <p className="subtitle">Welcome Back You’ve Been Missed!</p>
                    <p className="instructions">
                        To login enter Your email address and password
                    </p>
                </div>
                <form className="login-form" onSubmit={HandleSubmit}>
                    {alertMessage && <div className="form-alert">{alertMessage}</div>}
                    <label className="field">
                        <span>Email Address</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </label>

                    <label className="field">
                        <span>Password</span>
                        <div className="password-row">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="visibility-button"
                                onClick={() => setShowPassword((value) => !value)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                <img src={showPasswordIcon} alt="" aria-hidden="true" />
                            </button>
                        </div>
                    </label>

                    <label className="remember">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(event) => setRemember(event.target.checked)}
                        />
                        <span>Remember me</span>
                    </label>

                    <button type="submit" className="login-submit">
                        Login
                    </button>
                </form>
            </div>
        </main>
    )
}