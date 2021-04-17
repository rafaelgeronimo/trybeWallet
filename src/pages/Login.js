import React from "react";
import { connect } from "react-redux";
import { setEmailUser } from "../actions";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value
    });
  }

  onClick() {
    const { history, setEmail } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push("/carteira");
  }

  render() {
    const { email, password } = this.state;
    const patternEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    // const patternPassword = /[\w\D]{6}/g;
    return (
      <form>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={this.handleChange}
          pattern={patternEmail}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={this.handleChange}
          required
        />
        <input
          type="submit"
          value="Entrar"
          onClick={this.handleClick}
          disabled={!(patternEmail.test(email) && password.length >= 6)}
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  setEmail: (user) => dispatchEvent(setEmailUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
