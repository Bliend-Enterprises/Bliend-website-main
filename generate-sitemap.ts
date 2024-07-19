    import { SitemapStream, streamToPromise } from 'sitemap';
    import { createWriteStream } from 'fs';

    async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        // Add more URLs here
    ];

    const stream = new SitemapStream({ hostname: 'https://www.bliend.in' });
    const writeStream = createWriteStream('./public/sitemap.xml');
    stream.pipe(writeStream);
    
    links.forEach(link => stream.write(link));
    stream.end();
    
    await streamToPromise(stream);
    console.log('Sitemap generated!');
    }

    generateSitemap().catch(console.error);
