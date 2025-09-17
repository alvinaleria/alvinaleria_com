import { Card, CardContent, Typography } from '@mui/material';

const DefaultLayout = () => (
    <Card>
        <CardContent>
            <Typography variant="h5">Welcome to the Admin Dashboard</Typography>
            {/* Add widgets or stats here */}
        </CardContent>
    </Card>
);

export default DefaultLayout;
