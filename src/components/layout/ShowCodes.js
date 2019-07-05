import React from 'react';
import { Collapse, Card, CardBody } from 'reactstrap';
import { MyContext } from '../../store/Store';

const ShowCodes = () => {

    const [{codeState, codeText}, dispatch] = React.useContext(MyContext);

  return (
    <div>
      <Collapse isOpen={codeState}>
        <Card style={style}>
            <CardBody>
                <h3>{codeText}</h3>
            </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}

const style = {
  marginLeft: "15%", 
  marginRight: "15%"
}

export default ShowCodes;
