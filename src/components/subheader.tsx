import { FC } from "react";
import clarifon from '../assets/clarifon.png'
import antivirus from '../assets/antivirus.png'
import { StyledSubheader } from "../styles/subheader.styles";

const Subheader: FC = () => {
  return (
    <StyledSubheader>
      <img src={clarifon} alt="clarifon" />
      <img src={antivirus} alt="antivirus" />
    </StyledSubheader>
  );
}
 
export default Subheader;