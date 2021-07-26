import useStyles from './styles';
import React, { useState, useEffect } from 'react';
import { Badge, Toolbar, IconButton, CardMedia, Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Link } from 'react-router-dom';
import logo from './cashondelivery.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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



const UpBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
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
              image={logo}
              title="Contemplative Reptile"
            />
            <div className={classes.menuButton} >
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
                {/* <NavbarText>Logout</NavbarText> */}
              </Nav>
              <IconButton aria-label="show 17 new notifications" color="inherit" style={{ backgroundColor: 'transparent' }}>
                <Badge badgeContent={cart} color="secondary" onClick={() => submit()}>
                  <Typography style={{ marginRight: '12%' }}><b>Panier</b></Typography>
                  <ShoppingCartIcon style={{ color: 'black' }} />
                </Badge>
              </IconButton>
              </div>

              {/* <MenuIcon className={classes.btn} onClick={handleClick}/> */}
            </div>
          </Toolbar>
        </div>
        <div className={classes.menu2}>
          <Navbar light expand="md" className="ps-4 pe-4 ">
            <NavbarBrand ><Link to="/"><HomeIcon style={{ fontSize: '2rem', color: 'white' }} /></Link></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto align-items-center " navbar>
                <NavItem className="ps-1 pe-1">
                  <Link to="/offre" className="text-white text-decoration-none">MEILLEURES OFFRES</Link>
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
      </div>
    </>
  )
}

export default UpBar
