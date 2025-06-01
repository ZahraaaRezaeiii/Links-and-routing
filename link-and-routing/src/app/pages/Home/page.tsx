"use client"
import Link from "next/link"
import { Box, Button, Typography } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Home = () => {
    const [isClient, setIsClient] = useState(false)
    const pathName = usePathname()
    const router = useRouter()

    const handleClick = ()=> {
        router.refresh()
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }
    
    return (
        <Box sx={{
            padding: 2,
            textAlign: "center",
        }}>
            <Typography variant="h4" component="h1" gutterBottom>Home page</Typography>
            <Link href="/pages/About">
                <Typography>
                    Go to About page
                </Typography>
            </Link>
            <Link href="/pages/Home">
                <Typography
                sx={{color: (pathName === "/pages/Home") ? "primary.main" : "text-secondary"}}>
                    Go to Home page
                </Typography>
            </Link>
            <Link href="/">Go to Main page</Link>
            <Button onClick={handleClick}>Refresh</Button>
        </Box>
    )
}

export default Home