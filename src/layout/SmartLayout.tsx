// SmartLayout.tsx
import { LayoutProps } from 'react-admin';
import { useLocation } from 'react-router-dom';
import MinimalLayout from './MinimalLayout';
import DefaultLayout from './DefaultLayout';

const SmartLayout = (props: LayoutProps) => {
    const location = useLocation();
    const isAdminRoute = location.hash.startsWith('#/admin');

    return isAdminRoute ? <DefaultLayout {...props} /> : <MinimalLayout {...props} />;
};

export default SmartLayout;
