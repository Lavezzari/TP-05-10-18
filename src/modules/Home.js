import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {

    return (
      <div className="Home">       
        <Row>
          <Col m={5} s={5}>
            <Card id="free" className='grey lighten-5' textclassname='grey-text' title='Get Free' actions={[<Link to={{
              pathname: '/subs',
              state: 'free'
            }}> <Button waves="light" className="btn blue floatRight" textclassname="white">
                Go Free </Button></Link>]}>
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">Resolution</th>
                    <th data-field="name">Available</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Digital</td>
                    <td><i className="material-icons">done_outline</i></td>
                  </tr>
                  <tr>
                    <td>HD</td>
                    <td><i className="material-icons">clear</i></td>
                  </tr>
                  <tr>
                    <td>4K</td>
                    <td><i className="material-icons">clear</i></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col m={5} s={5}>
            <Card id="pro" className='grey lighten-5' textclassname='grey-text' title='Pro ($10)' actions={[<Link to={{
              pathname: '/subs',
              state: 'pro'
            }}><Button waves="light" className="btn blue floatRight" textclassname="white">
                Go Pro </Button></Link>]}>
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">Resolution</th>
                    <th data-field="name">Available</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Digital</td>
                    <td><i className="material-icons">done_outline</i></td>
                  </tr>
                  <tr>
                    <td>HD</td>
                    <td><i className="material-icons">done_outline</i></td>
                  </tr>
                  <tr>
                    <td>4k</td>
                    <td><i className="material-icons">done_outline</i></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
export default Home;
