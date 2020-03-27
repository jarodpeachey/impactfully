import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Dashboard extends Component {
  static propTypes = {
    user: PropTypes.object,
    classes: PropTypes.object,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  pushToPage (path) {
    this.props.history.push(`${path}`);
  }

  render () {
    const { user } = this.props;

    return (
      <>
        {Object.keys(user).length === 0 && user.constructor === Object ? (
          <div className="container">
            <div className="center-text">
              <Card className="card border no-shadow px-sm py-sm mb-sm">
                <h3>You must be logged in to access this page.</h3>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.pushToPage('/login')}
                >
                  Go To Login
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.pushToPage('/signup')}
                >
                  Go To Signup
                </Button>
              </Card>
            </div>
          </div>
        ) : (
          <Wrapper>
            <div className="container py-sm">
              <Card className="card border no-shadow px-sm py-sm mb-sm">
                <h4 className="m-none mb-xs">
                  Welcome,
                  {` ${user.name}!`}
                </h4>
              </Card>
            </div>
          </Wrapper>
        )}
      </>
    );
  }
}

const styles = () => ({
  button: {
    width: 'calc(100% + 1px)',
    position: 'absolute',
    left: -0.5,
    bottom: 0,
    borderRadius: 2,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTop: '1px solid #ddd',
  },
});

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Card = styled.div`
  background: white;
  position: relative;
`;

export default withStyles(styles)(Dashboard);
