import { Box, Typography } from "@mui/material"
import Link from "next/link"

const About = () => {
    return (
        <Box       
            sx={{
            padding: 2,
            textAlign: "center",
            }}
            suppressHydrationWarning>
            <Typography variant="h4" component="h1" gutterBottom>About page</Typography>
            <Link href="/pages/Home">Go to Home page</Link>
        </Box>
    )
}

export default About