import { Address } from './address/';
import { Container } from './container/';
import { NotFound } from './default/';
import { Home } from './home/';

export { Address, Container, NotFound, Home };
export class SignUpForm extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <form name="SignUpForm" id="SignUpForm" method="post">
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="First Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="Last Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="User Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="password" placeholder="Password" name="password" type="password" value="" />
        </div>
      </form>
    )
  }
}

export default SignInForm;
