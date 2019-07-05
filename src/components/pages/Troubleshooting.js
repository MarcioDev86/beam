import React from 'react';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import Plus from '../../images/plus.png';
import Minus from '../../images/minus.png';

function Troubleshooting() {

    const [btn1, btn1SetState] = React.useState(Plus);
    const [btn2, btn2SetState] = React.useState(Plus);
    const [btn3, btn3SetState] = React.useState(Plus);
    const [btn4, btn4SetState] = React.useState(Plus);
    const [btn5, btn5SetState] = React.useState(Plus);
    const [btn6, btn6SetState] = React.useState(Plus);
    const [btn7, btn7SetState] = React.useState(Plus);
    const [btn8, btn8SetState] = React.useState(Plus);
    const [btn9, btn9SetState] = React.useState(Plus);
    const [btn10, btn10SetState] = React.useState(Plus);
    const [btn11, btn11SetState] = React.useState(Plus);

    const btnToggler = (e) => {
        switch(e){
            case 'toggler1': 
                btn1 === Plus ? btn1SetState(Minus) : btn1SetState(Plus)
                return;
            
            case 'toggler2': 
                btn2 === Plus ? btn2SetState(Minus) : btn2SetState(Plus)
                return;

            case 'toggler3': 
                btn3 === Plus ? btn3SetState(Minus) : btn3SetState(Plus)
                return;

            case 'toggler4': 
            btn4 === Plus ? btn4SetState(Minus) : btn4SetState(Plus)
            return;
            
            case 'toggler5': 
                btn5 === Plus ? btn5SetState(Minus) : btn5SetState(Plus)
                return;

            case 'toggler6': 
                btn6 === Plus ? btn6SetState(Minus) : btn6SetState(Plus)
                return;

            case 'toggler7': 
                btn7 === Plus ? btn7SetState(Minus) : btn7SetState(Plus)
                return;
            
            case 'toggler8': 
                btn8 === Plus ? btn8SetState(Minus) : btn8SetState(Plus)
                return;

            case 'toggler9': 
                btn9 === Plus ? btn9SetState(Minus) : btn9SetState(Plus)
                return;

            case 'toggler10': 
                btn10 === Plus ? btn10SetState(Minus) : btn10SetState(Plus)
                return;

            case 'toggler11': 
                btn11 === Plus ? btn11SetState(Minus) : btn11SetState(Plus)
                return;

            default:
                console.error('Something went wrong...');
                return;     
        }
    }

    return (
        <div>
            <h1 style={{ height: "100px", backgroundColor: "#A67EB1", fontSize: "250%", color:"white"}}>
                <p style={{marginLeft: "5%", top: "90px", position: "sticky", lineHeight: "250%"}}>
                    Troubleshooting
                </p>
            </h1>

            <h3 style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                The Troubleshooting tips below can help you solve problems and answer questions you may 
                have with your Beam remote control.
            </h3>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn1} id="toggler1" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    The remote can't be programmed to operate my device
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler1">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        If you're using the app and having trouble programming your remote, try using the included
                        printed code list or the manual programming method explained in the Programming section of
                        the user guide.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn2} id="toggler2" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    Some of the buttons of the remote are not supported or working properly on my device
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler2">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        It's possible the code that you programmed is not fully compatible with your
                        device. Try selecting the next code from the options available for the category
                        and brand of your device. If you are unsuccessful at finding a better matching
                        code, it may be that there are some buttons from your device's original remote
                        that are not supported. You can easily copy them using the <b>Custom Buttons</b> or <b>Programming Manually</b> methods explained in this user guide.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn3} id="toggler3" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)}/>
                <h3 style={styleQuestions}>
                    My device does not match any of the DEVICE CATEGORIES on the remote
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler3">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        If you have a device such as an air conditioner, heater, or anything else that is
                        controlled by an IR remote and does not fit one of the remote’s Device
                        Category options, on the app select <b>OTHER</b> and use <b>SMART SEARCH</b> to try and
                        find a matching code from our cloud database or copy all the buttons of the
                        original remote and store it under <b>OTHER</b> in Device Categories of the remote. 
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn4} id="toggler4" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    My device’s menu or app hub does not appear
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler4">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        Menu and app hub access isn’t supported for all brands. You can copy that
                        button from your original remote to the Beam remote using the <b>Custom
                        Buttons</b> or <b>Program Manually</b> method.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>


            <div style={styleDiv}>
                <input height="2%" type="image" src={btn5} id="toggler5" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    The remote will not adjust the volume or channel on my device
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler5">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        Make sure the remote is in the correct Device Category mode (TV, SAT/CBL,
                        AUDIO, B-RAY/DVD, STREAM, OTHER) that controls the volume and channel of
                        your device.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>


            <div style={styleDiv}>
                <input height="2%" type="image" src={btn6} id="toggler6" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    How do I know what Device Category or Activity mode the remote is in?
                </h3>
            </div> 
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler6">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        When you press any button on the remote, the current Device Category or
                        tivity mode is lit in red. 
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn7} id="toggler7" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    I copied a button from my original remote but it’s not working 
                </h3>
            </div>
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler7">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        Beam is capable of copying any IR remote control button. However, sometimes
                        it is necessary to repeat the copying procedure to get the button working
                        properly- sometimes several attempts are required. Please make sure that
                        when copying, the two remotes are held closely together with their fronts
                        pointing at each other.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn8} id="toggler8" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    I can’t change the Activity settings on the app or on the remote
                </h3>
            </div>
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler8">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        To use the Activity buttons to control combo devices like TV+STB/CBL or
                        TV+DVD, you must program the individual corresponding devices. Please refer
                        to the Activity section in the user guide for more information.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn9} id="toggler9" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    When I press the POWER button in Activity mode, some of my devices do simultaneously turn on or off
                </h3>
            </div>
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler9">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        For this feature to work, prior to pressing the POWER button, all the devices
                        must be either on or off.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn10} id="toggler10" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    My remote isn’t working properly
                </h3>
            </div>
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler10">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        Try changing the batteries and make sure they are properly installed. If possible,
                        use alkaline batteries.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <div style={styleDiv}>
                <input height="2%" type="image" src={btn11} id="toggler11" alt="img-button" onClick={(e) => btnToggler(e.target.id)} onTouchStart={(e) => btnToggler(e.target.id)} />
                <h3 style={styleQuestions}>
                    I cannot find my remote
                </h3>
            </div>
            <hr style={styleHr} />
            <UncontrolledCollapse toggler="#toggler11">
                <Card style={styleCards}>
                    <CardBody style={styleCardsBody}>
                        Open the app and on the home screen press “FIND MY REMOTE”. If the remote
                        doesn’t beep, try walking around to the areas where you believe the remote
                        was lost. 
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            
            
        </div>
    )
}

const styleDiv = {
    marginLeft: "5%", 
    marginTop: "1%", 
    marginBottom: "1%", 
    display: "flex"
}

const styleHr = {
    marginLeft: "5%", 
    marginRight: "5%", 
    paddingTop: "1px", 
    paddingBottom: "1px", 
    color: "#A67EB1", 
    borderColor: "#A67EB1", 
    borderWidth: "1px" 
}

const styleQuestions = {
    marginLeft: "3%", 
    marginRight: "3%", 
    paddingTop: "5px"
}

const styleCards = {
    marginLeft: "5%", 
    marginRight: "5%"
}

const styleCardsBody = {
    backgroundColor: "#ECE5EE"
}

export default Troubleshooting;
