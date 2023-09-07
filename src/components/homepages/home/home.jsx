import React, { useState } from "react"


//dev





function Home() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const handleSearchSubmit = async (searchResults) => {
    };

    const handleOpen = () => {
        setSideBarOpen(!sideBarOpen)
        // console.log(sideBarOpen)
    }

    const handleClose = () => {
        setSideBarOpen(false)
        // console.log(sideBarOpen)
    }

    return (
        <div className=" bg-primary font-primary">
            HOME
        </div>
    )
}
export default Home;