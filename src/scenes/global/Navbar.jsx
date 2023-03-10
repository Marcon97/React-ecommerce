import { useDispatch } from "react-redux";
import {Badge, Box, IconButton} from "@mui/material";
import { PersonOutlined, SearchOutlined, ShoppingBagOutlined, MenuOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {shades} from "../../theme";

const Navbar = () => {
    const navigate = useNavigate;
    const dispatch = useDispatch;
  return (
    <Box
    display= "flex"
    alignItems= "center"
    width = "100%"
    height = "60px"
    backgroundColor = "rgba(255,255,255, 0.95)"
    color = "black"
    position ="fixed"
    top = "0"
    left = "0"
    zIndex = "1"
    >
        <Box
        margin = "auto"
        display="flex"
        width = "80%"
        justifyContent= "space-between"
        alignItems= "center" 
        >
            <Box onClick={() => navigate("/")}
            sx = {{'&:hover': {cursor: "pointer"}}}
            color={shades.secondary[500]}
            >
                Ecommer
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar
