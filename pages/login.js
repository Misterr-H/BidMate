import {UIStore} from "@/store/store";
import {useState} from "react";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();
    const login = UIStore.useState(s => s.login);
    const email = UIStore.useState(s => s.email);
    const password = UIStore.useState(s => s.password);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState(false);

    if(login) {
        if(typeof window !== 'undefined')
            router.push('/');
    }

    return (
        <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
                </label>
                <input value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input value={enteredPassword} onChange={e => setEnteredPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
                {error && <p className="text-red-500 text-xs italic">Please enter a valid email and password.</p>}
            <div className="flex items-center justify-between">
                <button onClick={() => {
                    if(enteredEmail === email && enteredPassword === password) {
                        UIStore.update(s => {
                            s.login = true;
                        })
                    } else {
                        setError(true);
                    }
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="signup">
                Create an Account
                </a>
            </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
            &copy;2023 BidMate. All rights reserved.
            </p>
        </div>
        </div>
    )
}

export default Login;