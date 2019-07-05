import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MyContext } from '../../store/Store';
import './touchStyle.css';

function Device() {

    //const [state, setState] = React.useState(false);
    const [{pclName, deviceState, deviceName}, dispatch] = React.useContext(MyContext);

    const setDeviceState = () => {
        dispatch({type: 'deviceState'})
    }

    const setDeviceName = (device) => {
        dispatch({type: 'deviceName', payLoad: device})
        dispatch({type: 'brandName', payLoad: 'SELECT YOUR BRAND'})

        dispatch({type: 'codeState', payLoad: false})
        dispatch({type: 'codeText', payLoad: ''})
    }

    const createDeviceItems = () => {
        if(pclName === 'PCL 3'){
            return (
                <div>
                    <DropdownItem onClick={() => setDeviceName('SELECT YOUR DEVICE')} key='SELECT YOUR DEVICE' className="dpItem">SELECT YOUR DEVICE</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('TV')} key='TV' className="dpItem">TV</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('TV/DVD COMBO')} key='TV/DVD COMBO' className="dpItem">TV/DVD COMBO</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('SET-TOP BOX')} key='SET-TOP BOX' className="dpItem">SET-TOP BOX</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('STREAMING MEDIA PLAYER')} key='STREAMING MEDIA PLAYER' className="dpItem">STREAMING MEDIA PLAYER</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('BLU-RAY')} key='BLU-RAY' className="dpItem">BLU-RAY</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('DIGITAL FRAME')} key='DIGITAL FRAME' className="dpItem">DIGITAL FRAME</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('AUDIO')} key='AUDIO' className="dpItem">AUDIO</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('VCR')} key='VCR' className="dpItem">VCR</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('SOUNDBAR')} key='SOUNDBAR' className="dpItem">SOUNDBAR</DropdownItem>
                    <DropdownItem onClick={() => setDeviceName('DVD PLAYER')} key='DVD PLAYER' className="dpItem">DVD PLAYER</DropdownItem>
                </div>
            )
        }else{
            return (
                <div>
                    <DropdownItem className="dpItem">SELECT PCL FIRST!</DropdownItem>
                </div>
            )
        }
    }

    return (
        <div>
            <Dropdown isOpen={deviceState} toggle={() => setDeviceState()} >
                <DropdownToggle caret style={{width : "100%", backgroundColor:"#A67EB1"}}>
                    {deviceName}
                </DropdownToggle>
                <DropdownMenu style={{width : "100%", overflowY: "auto", maxHeight: "50vh"}} onChange={() => createDeviceItems()}>
                    {createDeviceItems()}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Device;