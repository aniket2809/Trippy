import "./SignInFormStyles.css";

function SignInForm(){
    return (
        <div className="sign-container">
            <h1>Fill the essentials and get connected</h1>
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignInForm;