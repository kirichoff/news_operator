import React, {Component} from 'react';
import Bar from "./Bar";

class Login extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <form action="">
                    <input type="email"/>
                    <input type="password"/>
                    <input type="submit" value={"вхоод"} />
                </form>
            </div>
        );
    }
}

export default Login;