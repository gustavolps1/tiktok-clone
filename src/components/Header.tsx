import SeeMore from "./SeeMore"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import InputSearch from "./InputSearch";
import ReactLogo from '../assets/tiktok-logo.svg';

export default function Header() {
    return (
        <div className="header-container" style={headerContainerStyle}>
            <div className="header-main" style={headerMainStyle}>

                <img style={{width:"136px", height:"72px"}} src={ReactLogo} alt="React Logo" />

                <form style={formPesquisarStyle}>
                    <div className="header-center">

                        <InputSearch />

                    </div>
                </form>
                <Box sx={headerRightStyle}>
                    <Button style={buttonStyle} variant="outlined" startIcon={<AddIcon />}>Carregar</Button>
                    <Button style={buttonStyle} variant="contained" disableElevation>Entrar</Button>
                    <SeeMore />
                </Box>
            </div>
        </div>
    )
}



const headerRightStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: "288px",
    justifyContent: 'space-around',
}



const formPesquisarStyle = {
    display: "flex",
    background: "rgba(22, 24, 35, .06)",
    borderRadius: "92px",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    margin: "0",
    border: "none",

}

const headerContainerStyle = {
    display: "flex",
    WebkitBoxPack: "space-around",
    msFlexPack: "space-around",
    WebkitJustifyContent: "space-around",
    justifyContent: "space-around",
    boxShadow: "0px 1px 1px rgb(0 0 0 / 12%)",
    height: "60px",
    width: "100%",
    top: "0",
    position: "fixed",
    WebkitAlignItems: "center",
    WebkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 1)",
    zIndex: 1000

}

const headerMainStyle = {
    width: "100%",
    display: "flex",
    height: "100%",
    WebkitFlexDirection: "row",
    msFlexDirection: "row",
    flexDirection: "row",
    WebkitBoxPack: "justify",
    WebkitJustifyContent: "space-between",
    justifyContent: "space-between",
    WebkitAlignItems: "center",
    WebkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
    maxWidth: "1150px",
    paddingRight: "24px",
    paddingLeft: "20px"
}

const buttonStyle = {
    textTransform: "none",
    fontWeight: "bold"
}

