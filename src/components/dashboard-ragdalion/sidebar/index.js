"use client"

import { IconButton } from "@mui/material"

export default function Sidebar({ onChangeActive }) {
    return (
        <div className="sidebar-rgd">
            <IconButton>
                <h1>Dashboard</h1>
            </IconButton>
            <IconButton>
                <h1>About</h1>
            </IconButton>
            <IconButton>
                <h1>Main</h1>
            </IconButton>
            <IconButton onClick={() => onChangeActive(0)}>
                <h1>
                    Users
                </h1>
            </IconButton>
            <IconButton onClick={() => onChangeActive(1)}>
                <h1>
                    Add Users
                </h1>
            </IconButton>
        </div>
    )
}