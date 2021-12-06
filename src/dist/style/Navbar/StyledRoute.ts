import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const linkColor = '#fff';
const hoverColor = '#686868';

export const StyledRoute = styled(Link)`
  text-decoration: none;
  color: ${linkColor};
  
  &:hover {
    color: ${hoverColor};
  }
`;