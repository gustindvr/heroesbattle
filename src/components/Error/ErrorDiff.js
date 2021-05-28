import {Alert} from 'react-bootstrap';

const ErrorDiff = ({titleError, messageError}) => {
  return ( 
    <Alert variant='danger'>
      <Alert.Heading>{titleError}</Alert.Heading>
      <p>{messageError}</p>
    </Alert>
   );
}
 
export default ErrorDiff;