import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Logout from './Logout'

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
} from 'reactstrap'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import Notifications from '../Dropdowns/Notifications'

const LogoBrand = styled.h4`
  color: var(--primary);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  margin-left: 0.5rem;
  position: fixed;
  @media (max-width: 991.98px) {
    position: static;
  }
`

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: 'navbar-transparent',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateColor)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateColor)
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: 'bg-white',
      })
    } else {
      this.setState({
        color: 'navbar-transparent',
      })
    }
  }
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: 'navbar-transparent',
      })
    } else {
      this.setState({
        color: 'bg-white',
      })
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    })
  }
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch,
    })
  }
  render() {
    return (
      <>
        <Navbar className={classNames('navbar-absolute', this.state.color)} expand="lg">
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames('navbar-toggle d-inline', {
                  toggled: this.props.sidebarOpened,
                })}
              >
                <button className="navbar-toggler" type="button" onClick={this.props.toggleSidebar}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Link to="/">
                <LogoBrand>{this.props.brandText}</LogoBrand>
              </Link>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar">
                  <Button color="link" data-target="#searchModal" data-toggle="modal" id="search-button" onClick={this.toggleModalSearch}>
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav>
                  <Notifications />
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" data-toggle="dropdown" nav onClick={(e) => e.preventDefault()}>
                    <div className="photo">
                      <img alt="..." src={this.props.img || require('assets/img/anime3.png')} />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <Link to="/user">
                        <DropdownItem className="nav-item">Profile</DropdownItem>
                      </Link>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Settings</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <Logout {...this.props} />
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal modalClassName="modal-search" isOpen={this.state.modalSearch} toggle={this.toggleModalSearch}>
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={this.toggleModalSearch}>
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    )
  }
}

export default AdminNavbar
