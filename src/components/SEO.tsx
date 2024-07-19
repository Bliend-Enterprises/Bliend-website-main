import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
    lang?: string;
    meta?: { name: string; content: string }[];
    ogImage?: string;
    twitterCard?: string;
    twitterSite?: string;
    twitterCreator?: string;
    structuredData?: object;
    }

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    author,
    lang = 'en',
    meta = [],
    ogImage,
    twitterCard,
    twitterSite,
    twitterCreator,
    structuredData,
    }) => {
    return (
        <Helmet
        htmlAttributes={{ lang }}
        title={title}
        meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: author },
            { name: 'robots', content: 'index, follow' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: window.location.href },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: ogImage },
            { property: 'og:site_name', content: title },
            { property: 'og:locale', content: 'en_US' },
            { name: 'twitter:card', content: twitterCard },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: ogImage },
            { name: 'twitter:site', content: twitterSite },
            { name: 'twitter:creator', content: twitterCreator },
            ...meta
        ]}
        link={[
            { rel: 'canonical', href: window.location.href }
        ]}
        >
        {structuredData && (
            <script type="application/ld+json">
            {JSON.stringify(structuredData)}
            </script>
        )}
        </Helmet>
    );
    };

    export default SEO;