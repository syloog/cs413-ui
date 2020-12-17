import "./App.css";
import { Redirect } from 'react-router';
import { withRouter, Link} from "react-router-dom";
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {
    Button,
    Grid,
    Header,
    Divider,
    Icon,
    Segment,
    Container,
  } from "semantic-ui-react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      };
    
      componentDidMount = () => {
      };
    
      render = () => {
        
        if (this.state.redirect) {
          return <Redirect push to="/login" />;
        }
    
        return (
            <div className="App">
            <Container>
            <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>
        
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header icon>
                    <Icon name='building' />
                    Company
                  </Header>
        
                  <Button as={Link} 
                    to= "/logincompany" >    
                    Select
                    </Button>
                </Grid.Column>
        
                <Grid.Column>
                  <Header icon>
                    <Icon name='address card' />
                    Employee
                  </Header>
                  <Button as={Link} 
                    to= "/loginemployee" >    
                    Select
                    </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          </Container>
          </div>
        );
      };
}
export default withRouter(Welcome);

<div class="ui placeholder segment"><div class="ui stackable center aligned two column grid"><div class="ui vertical divider">Or</div><div class="middle aligned row"><div class="column"><div class="ui icon header"><i aria-hidden="true" class="search icon"></i>Find Country</div><div class="ui search"><div class="ui icon input"><input type="text" placeholder="Search countries..." autoComplete="off" value="" tabindex="0" class="prompt"/><i aria-hidden="true" class="search icon"></i></div><div class="results transition"><div class="message empty"><div class="header">No results found.</div></div></div></div></div><div class="column"><div class="ui icon header"><i aria-hidden="true" class="world icon"></i>Add New Country</div><button class="ui primary button">Create</button></div></div></div></div>