import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

async function loginUser(credentials) {
    return axios
        .post(
            'http://localhost:8000/token/',
            credentials
        )
        .then(res => res.data)
}

export default function Login(props) {
    const { setToken } = props;
    const [credentials, setCredentials] = React.useState({ username: '', password: '' });

    function handleChange(event) {
        const {name, value} = event.target;
        setCredentials(prevCreds => ({ ...prevCreds, [name]: value }));
    }

    async function handleLogin(event) {
        event.preventDefault();
        const { token } = await loginUser({
            username: credentials.username,
            password: credentials.password
        });
        setToken(token);
    }

    return (
        <Form>
          <FormGroup>
            <Label for="login-user">Username</Label>
            <Input
              type="text"
              id="login-user"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </FormGroup>
          <Label for="login-pw">Password</Label>
            <Input
              type="password"
              id="login-pw"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button
              color="success"
              onClick={handleLogin}
            >
                Submit
            </Button>
        </Form>
    )
}