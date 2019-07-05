import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MyContext } from '../Store';
import './touchStyle.css';

function PCL() {
    //const [state, setState] = React.useState(false);
    const [{pclState, pclName, deviceName}, dispatch] = React.useContext(MyContext);

    const toggle = () => {
        dispatch({type: 'pclState'})
    }

    const changeToggleName = (pcl) => {
        //dispatch({type: 'pclName', payLoad: pcl})

        if(pcl === 'Select Your PCL'){
            dispatch({type: 'pclName', payLoad: pcl})
            dispatch({type: 'deviceName', payLoad: 'Select Your Device'})
            dispatch({type: 'brandName', payLoad: 'Select Your Brand'})
            dispatch({type: 'codeState', payLoad: false})
            dispatch({type: 'codeText', payLoad: ''})
        }else{
            dispatch({type: 'pclName', payLoad: pcl})
        }

    }

    return (
        <div style={{marginTop:"10%"}}>
            <Dropdown isOpen={pclState} toggle={() => toggle()} >
                <DropdownToggle caret style={{width : "100%", backgroundColor:"#A67EB1"}}>
                    {pclName}
                </DropdownToggle>
                <DropdownMenu style={{width : "100%"}}>
                    <DropdownItem onClick={() => changeToggleName('Select Your PCL')} className="dpItem">Select Your PCL</DropdownItem>
                    <DropdownItem onClick={() => changeToggleName('PCL 3')} className="dpItem">PCL 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default PCL;

/*
<DropdownItem onClick={() => changeToggleName('PCL 1')} className="dpItem">PCL 1</DropdownItem>
<DropdownItem onClick={() => changeToggleName('PCL 2')} className="dpItem">PCL 2</DropdownItem>
*/