import Head from 'next/head';
import { LayoutProps } from 'react-admin';


const MinimalLayout = ({ children }: LayoutProps) => {
    return <>
        <Head>
        <title>Alvin Aleria - Creative Developer Portfolio</title>
        <meta name="description" content="Filipino freelance creative developer with a keen interest in FE/BE development and UI animations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Alvin Aleria - Creative Developer Portfolio" />
        <meta property="og:description" content="Filipino freelance creative developer with a keen interest in FE/BE development and UI animations." />
        <meta data-n-head="1" property="og:url" content="https://alvinaleria.com"></meta>
        <meta data-n-head="1" name="twitter:card" content="summary_large_image"></meta>
        <meta data-n-head="1" name="twitter:creator" content="@alvinaleria"></meta>
        <meta data-n-head="1" name="twitter:image:src" content="https://patrickheng.com/share-tw.jpg"></meta>
        <link rel="icon" type="image/png" href="//alvinaleria.com/favicon.png" />
        </Head>
        {children}
    </>;
};

export default MinimalLayout;
