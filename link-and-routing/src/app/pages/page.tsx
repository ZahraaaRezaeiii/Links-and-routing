"use client"
import { Box, Typography } from "@mui/material"
import Link from "next/link"

type nav = {
    id: string,
    title: string,
    link: string,
}

const Navbar = () => {

    const navs: nav[] = [
        {
            id: "home-link",
            title: "Go to Home page",
            link: "/pages/Home"
        },
        {
            id: "about-link",
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
            key={item.id}
            href={`${item.link}`}
            prefetch={true}>
                <Typography>
                    {item.title}
                </Typography>
            </Link>)}
        </Box>
    )
}

export default Navbar