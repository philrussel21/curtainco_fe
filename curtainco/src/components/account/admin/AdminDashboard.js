import React, { useState } from "react";

// ADMIN COMPONENTS
import AdminTabs from "./AdminTabs";
// import AdminDrawer from "./AdminDrawer";

// MAT UI
import { Container, Typography } from "@material-ui/core";

function AdminDashboard() {
    const [tabValue, setTabValue] = useState(1);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container>
            {/* <AdminDrawer /> */}
            <AdminTabs tabValue={tabValue} handleChange={handleTabChange} />
        </Container>
    );
}

export default AdminDashboard;
