'use client'
import styles from '@/app/styles/navbar.module.css'
import Link from "next/link"
import {CgCloseR, CgMenu} from "react-icons/cg";
import {useState} from "react";
import { Drawer,Box,Divider,Typography,Hidden,IconButton,Button, AppBar, Toolbar,TextField, InputBase} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image'


function Nav() {


  const [mobileopen, setMobileopen] = useState(false);

  
  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen)
  }
   
    //menu drawer for mobile view
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" ,mt:4}}>
        <Typography color="black" variant='h6' component="div" sx={{ flexGrow: "1", width: 200 }}>
        <div className={styles.mob_navbar_brand}> 
   
         <h3>Netflix</h3>
       <Link href="/" > 
       <Image className={styles.logo} src="/netflix.png" alt= " my logo" width={50} height={40} />
       </Link>
   </div>
       </Typography>
          <ul className={styles.mobile}>
            <Divider />
        
                <li>
                  <Link href={"/"} >Home</Link>
                  <Divider />
                </li> 
                <li>
                  <Link href={"/movie"}>Movie</Link>
                <Divider />
                </li>
                <li>
                  <Link href={"/contact"}>Contact Us</Link>
                  <Divider />
                </li>
                </ul>

      </Box>
    )

  return (
    
 <nav className={styles.navbar} >
   <div>
   <Box sx={{ display: { xs: "none", md: "block" } }}>
    <ul className={styles.navbarList}>

     <li className={styles.navbarItem}>
    <Link className={styles.navbarLink} href="/">Home </Link>
     </li>
     <li className={styles.navbarItem}>
    <Link className={styles.navbarLink} href="/movie">Movie </Link>
     </li>
  
     <li className={styles.navbarItem}>
    <Link className={styles.navbarLink} href="/contact">Contact Us</Link>
     </li>

    </ul>
    </Box>

          
    </div>
    
               <IconButton color='inherit' aria-label='open drawer' edge="start"
                     sx={{  display: { md: "none" },position:"relative" }}
                     onClick={handleDrawerToggle}>
                     <MenuIcon sx={{position:"absolute",left:"50px"}}/>
                   </IconButton>
                   

                   <Box component="nav">
          <Drawer variant="temporary" open={mobileopen} onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}>
            {drawer}
          </Drawer>
        </Box>    
 
  </nav>
  
  )
}

export default Nav