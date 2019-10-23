import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledAlert
} from "reactstrap";
import { MyContext } from "../../store/Store";

import codes from "../../codes/PCL_3.json";
import audiocodes from "../../codes/pcl3_sepcodes/audio.json";
import blucodes from "../../codes/pcl3_sepcodes/blu.json";
import digitalframecodes from "../../codes/pcl3_sepcodes/digitalframe.json";
import dvdcodes from "../../codes/pcl3_sepcodes/dvd.json";
import soundbarcodes from "../../codes/pcl3_sepcodes/soundbar.json";
import stbcodes from "../../codes/pcl3_sepcodes/stb.json";
import streamingcodes from "../../codes/pcl3_sepcodes/streaming.json";
import tvcodes from "../../codes/pcl3_sepcodes/tv.json";
import tvdvdcodes from "../../codes/pcl3_sepcodes/tvdvd.json";
import vcrcodes from "../../codes/pcl3_sepcodes/vcr.json";
import "./touchStyle.css";

function Brand() {
  //const [state, setState] = React.useState(false);

  const [{ brandState, brandName, deviceName }, dispatch] = React.useContext(
    MyContext
  );

  const setBrandState = () => {
    dispatch({ type: "brandState" });
  };

  const getCodes = brand => {
    return codes.map(p => {
      return p.brand === brand && p.device === deviceName ? (
        <UncontrolledAlert style={{ backgroundColor: "#ECE5EE" }}>
          {p.code}
        </UncontrolledAlert>
      ) : null;
    });
  };

  const ShowCodes = async brand => {
    // Set brand name
    dispatch({ type: "brandName", payLoad: brand });
    await 500;
    dispatch({ type: "codeText", payLoad: getCodes(brand) });
    dispatch({ type: "codeState", payLoad: true });
  };

  const createBrandItems = () => {
    switch (deviceName) {
      case "SELECT YOUR DEVICE":
        return (
          <DropdownItem className="dpItem">SELECT A DEVICE FIRST!</DropdownItem>
        );

      case "AUDIO":
        return audiocodes.AUDIO.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "BLU-RAY":
        return blucodes.BLURAY.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "DIGITAL FRAME":
        return digitalframecodes.DIGITALFRAME.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "DVD PLAYER":
        console.log("inside dvd player");
        return dvdcodes.DVDPLAYER.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "SET-TOP BOX":
        return stbcodes.STB.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "STREAMING MEDIA PLAYER":
        return streamingcodes.STREAMING.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "TV":
        return tvcodes.TV.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "SOUNDBAR":
        return soundbarcodes.SOUNDBARS.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "TV/DVD COMBO":
        return tvdvdcodes.TVDVD.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      case "VCR":
        return vcrcodes.VCR.map(t => (
          <DropdownItem className="dpItem" onClick={() => ShowCodes(t)} key={t}>
            {t}
          </DropdownItem>
        ));

      default:
        return <DropdownItem className="dpItem">ERROR...</DropdownItem>;
    }
  };

  return (
    <div>
      <Dropdown isOpen={brandState} toggle={() => setBrandState()}>
        <DropdownToggle
          caret
          style={{ width: "100%", backgroundColor: "#A67EB1" }}
        >
          {brandName}
        </DropdownToggle>
        <DropdownMenu
          style={{ width: "100%", overflowY: "auto", maxHeight: "50vh" }}
          onChange={() => createBrandItems()}
        >
          {createBrandItems()}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Brand;
