"use client"
import { Box, Typography } from "@mui/material"
import Link from "next/link"

type nav = {
    title: string,
    link: string,
}

const Navbar = () => {

    const navs: nav[] = [
        {
            title: "Go to Home page",
            link: "/pages/Home"
        },
        {
            title: "Go to About page",
            link: "/pages/About"        
        }
    ]

    return (
        <Box
        sx={{
            padding: 2,
            textAlign: "center"
        }}>
            {navs.map(item =>             
            <Link 
            href={`${item.link}`}>
                <Typography>
                    {item.title}
                </Typography>
            </Link>)}
        </Box>
    )
}

export default Navbar