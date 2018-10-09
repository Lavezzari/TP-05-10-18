import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { CountryDropdown } from 'react-country-region-selector';
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import checkCreditCard from '.././components/CreditValidator';
import './Subs.css';

class Subs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: '',
      nombre: '',
      apellido: '',
      country: '',
      password: '',
      email: '',
      cnumero: '',
      cexpiry: '',
      ccvc: '',
    };
  }

  componentDidMount() {
    this.setState({ tipo: this.props.location.state })
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleChangeNombre(event) {
    this.setState({ nombre: event.target.value });
  }

  handleChangeApellido(event) {
    this.setState({ apellido: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeCNumero(event) {
    this.setState({ cnumero: event.target.value });
  }

  handleChangeExpiry(event) {
    this.setState({ cexpiry: event.target.value });
  }

  handleChangeCVC(event) {
    this.setState({ ccvc: event.target.value });
  }

  pago() {
    if (this.state.tipo === 'pro') {
      return (<div><CreditCardInput containerClassName="creditcard" inputClassName="inputCC"
        cardNumberInputProps={{ onChange: this.handleChangeCNumero.bind(this) }}
        cardExpiryInputProps={{ onChange: this.handleChangeExpiry.bind(this) }}
        cardCVCInputProps={{ onChange: this.handleChangeCVC.bind(this) }}
      />


        <Cards number={this.state.cnumero}
          nombre={this.state.nombre + " " + this.state.apellido}
          expiry={this.state.cexpiry}
          cvc={this.state.ccvc}
        />

      </div>);
    }
  }

  heavyCheckCC() {
    let r;
    if (checkCreditCard(this.state.cnumero, 'visa')) {
      r = true
    } else { r = false; }

    return r;
  }

  checkFields() {
    let res = false;


    if ((this.state.nombre.length > 0) &&
      (this.state.apellido.length > 0) &&
      (this.state.email.length > 0) &&
      (this.state.country.length > 0) &&
      (this.state.password.length > 0)) {
      res = true;
    };

    if (this.state.tipo === "pro") {
      if ((this.state.cnumero.length > 0) &&
        (this.state.cexpiry.length > 0) &&
        (this.state.ccvc.length > 0)) {
        // todo
      } else {
        res = false;
      }
    }
    return res;
  }


  registrarse() {
    if (this.checkFields()) {
      this.fetchData();
      setTimeout(() => {
        this.props.history.push('/LookFor');
      }, 2000);
    } else {
      window.Materialize.toast('Campos incompletos', 1000);
    }
  }

  fetchData() {

    let userPost = {
      tipo: this.state.tipo,
      nombre: this.state.nombre + " " + this.state.apellido,
      email: this.state.email,
      pais: this.state.country,
    };


    fetch('https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones', { 
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userPost, '\t')
    })
      .then(JSON.stringify(userPost, '\t'))
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        window.Materialize.toast('Request succeeded with JSON response', 1000);
      })
      .catch(function (error) {
        console.log('Request failed', error);
        window.Materialize.toast('Request failed', 1000);
      });
  }

  render() {
    const { country } = this.state;

    return (
      <div className="alingContent">
        <div className="Subs">
          <Row>
            <form>
              <Input id="userName" s={12} label="First Name" onChange={this.handleChangeNombre.bind(this)} />
              <Input id="lastName" s={12} label="Last Name" validate onChange={this.handleChangeApellido.bind(this)} />
              
              <CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} className="showBlock" />

              <Input type="password" label="Password" s={12} validate onChange={this.handleChangePassword.bind(this)} />
              <Input type="email" label="Email" s={12} validate onChange={this.handleChangeEmail.bind(this)} />
            </form>

            <div className="ccDiv"> {this.pago()} </div>

          </Row>
          <Button waves="red" className="btn blue floatRight" textclassname="white" onClick={() => { this.registrarse() }} disabled={this.state.boton} >Submit</Button>

        </div>
      </div>
    );
  }
}

export default Subs;
