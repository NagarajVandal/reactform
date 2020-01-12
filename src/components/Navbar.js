import React , { useEffect , useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import fire from "../fire"
import { Switch , Link, BrowserRouter } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
    const [register , setRegister] = useState(null)
    const [login , setLogin] = useState(null)
  const classes = useStyles();

 useEffect(() => {
     userAuth()
 }, []) 

 const logout = () => {
     fire.auth().signOut()
 }

 function userAuth() {
     fire.auth().onAuthStateChanged(user => {
        if(user){
            setRegister(user)
        }else{
            setRegister(null)
        } 
     })
 }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Github
          </Typography>
          <Button color="secondary"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Button>
          <Button color="inherit">About Us</Button>
          {register ? ( <Link to="/"><Button color="secondary" onClick={logout}>Logout</Button></Link>) : (<Fragment><Link to="/login" style={{ textDecoration: 'none' }}><Button color="secondary" >Login</Button></Link>
          <Link to="/register" style={{ textDecoration: 'none' }}><Button color="secondary" >Register</Button></Link></Fragment>)}
         
        </Toolbar>
      </AppBar>
    </div>

  );
}
