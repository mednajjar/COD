import useStyles from './styles';
import React, { useState, useEffect } from 'react';
import { Badge, Toolbar, IconButton, CardMedia, Typography, ListItem, ListItemAvatar, Avatar, ListItemText  } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Link } from 'react-router-dom';
import {cashondelivery} from '../../assets';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import { useCart } from "react-use-cart";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const UpBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const avatar = "https://pfpmaker.com/_nuxt/img/profile-4.871e331.png"
  const [role, setRole] = useState('')
  let toggle = () => setIsOpen(!isOpen);

  const [cart, setCart] = React.useState(0);
  const submit = () => {
    history.push('/cart')
  }
  useEffect(() => {
    setCart(items.length)
  }, [items])
  return (
    <>
      <div className={classes.root}>
        <div position="static" className={classes.menu}>
          <Toolbar className={classes.space} >
            <CardMedia
              className={classes.media}
              image={cashondelivery}
              title="Contemplative Reptile"
            />
            <div className={classes.menuButton} >
             {
               role === "vendeur" ? (
                 
                  <button onClick="" className="text-black fw-bold bg-transparent border-0">Logout <ExitToAppIcon /></button>

               ) : (
                  <div className="d-flex flex-wrap justify-content-end">
                  <Nav>
                    <UncontrolledDropdown nav inNavbar style={{ alignSelf: 'center' }}>
                      <DropdownToggle nav className="fw-bold fs-6 " style={{ color: "black", paddingLeft: 0 }}>
                        <Typography className="fw-bold">
                          Se connecter
                        </Typography>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className="text-warning fw-bold">
                          <Link to="/login" className={classes.linkStyle}>
                            SE CONNECTER
                          </Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="text-warning fw-bold">
                          <Link to="/register" className={classes.linkStyle}>
                            CREER UN COMPTE
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <IconButton aria-label="show 17 new notifications" color="inherit" style={{ backgroundColor: 'transparent' }}>
                    <Badge badgeContent={cart} color="secondary" onClick={() => submit()}>
                      <Typography style={{ marginRight: '12%' }}><b>Panier</b></Typography>
                      <ShoppingCartIcon style={{ color: 'black' }} />
                    </Badge>
                  </IconButton>
                  </div>

               )
             } 
            </div>
          </Toolbar>
        </div>
        {
          role === 'vendeur' ? (
            <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary="VENDEUR" className="text-white" />
              </ListItem>
              </NavbarBrand>
            <MenuIcon className={classes.mainMenu} onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/myStore" className="text-white text-decoration-none">PRODUITS</Link>
                </NavItem>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/addProduct" className="text-white text-decoration-none">AJOUTER PRODUITS</Link>
                </NavItem>
                <NavItem className="align-items-center ps-1 pe-1">
                  <Link to="/vendeurDashboard/shipping" className="text-white text-decoration-none">COMMANDES & LIVRAISON</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
          ) : role === 'livreur' ? (
            <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary="Livreur" className="text-white" />
              </ListItem>
              </NavbarBrand>
            <MenuIcon className={classes.mainMenu} onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/myStore" className="text-white text-decoration-none">PRODUITS</Link>
                </NavItem>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/addProduct" className="text-white text-decoration-none">AJOUTER PRODUITS</Link>
                </NavItem>
                <NavItem className="align-items-center ps-1 pe-1">
                  <Link to="/vendeurDashboard/shipping" className="text-white text-decoration-none">LIVRAISON</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
          ) : role === 'admin' ? (
            <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary="admin" className="text-white" />
              </ListItem>
              </NavbarBrand>
            <MenuIcon className={classes.mainMenu} onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/myStore" className="text-white text-decoration-none">PRODUITS</Link>
                </NavItem>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/addProduct" className="text-white text-decoration-none">AJOUTER PRODUITS</Link>
                </NavItem>
                <NavItem className="align-items-center ps-1 pe-1">
                  <Link to="/vendeurDashboard/shipping" className="text-white text-decoration-none">LIVRAISON</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
          ) : role === 'customer' ? (
            <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary="Customer" className="text-white" />
              </ListItem>
              </NavbarBrand>
            <MenuIcon className={classes.mainMenu} onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/myStore" className="text-white text-decoration-none">PRODUITS</Link>
                </NavItem>
                <NavItem className="ps-3 pe-3">
                  <Link to="/vendeurDashboard/addProduct" className="text-white text-decoration-none">AJOUTER PRODUITS</Link>
                </NavItem>
                <NavItem className="align-items-center ps-1 pe-1">
                  <Link to="/vendeurDashboard/shipping" className="text-white text-decoration-none">LIVRAISON</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
          ) : (
            <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand ><Link to="/"><HomeIcon style={{ fontSize: '2rem', color: 'white' }} /></Link></NavbarBrand>
            <MenuIcon className={classes.mainMenu} onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-1 pe-1">
                  <Link to="/store" className="text-white text-decoration-none">BOUTIQUE</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar className="ps-1 pe-1">
                  <DropdownToggle nav caret className="text-white">
                    GAGNEZ DE L'ARGENT
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="fw-bold">
                      <Link to="/vendeur" className={classes.linkStyle}>
                        Vendez sur Cash on Delivery
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="fw-bold">
                      <Link to="/livreur" className={classes.linkStyle}>
                        Devenir livreur
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="align-items-center ps-1 pe-1">
                  <Link to="/contact" className="text-white text-decoration-none">CONTACTEZ NOUS</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div> 
          )
        }
        
        
      </div>
    </>
  )
}

export default UpBar
