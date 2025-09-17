import { useLocation } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import MinimalLayout from './MinimalLayout';

const SmartLayout = (props: any) => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    const LayoutComponent = isAdminRoute ? DefaultLayout : MinimalLayout;
    return <LayoutComponent {...props} />;
};

export default SmartLayout;
