function AppNav(props) {
  return (
    <nav>
    {
      props.navItems.map((elem)=>
        <a href='#' onClick={()=>props.handleNavClick(elem.value)}>
           { elem.label } |         
        </a>
      )
    }

    </nav>
  )
}

export default AppNav;
