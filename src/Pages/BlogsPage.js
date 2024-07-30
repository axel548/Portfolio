// import React from 'react';
import allBlogs from '../Components/allBlogs';
import Tittle from '../Components/Tittle';

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                <Tittle title={'Certifieds'} span={'Certifieds'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer" >
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogsPage;


// https://tecnosoluciones.com/que-es-un-sysadmin/
// https://www.linkedin.com/advice/0/what-do-you-want-jumpstart-your-system-administration-swqae?lang=es&originalSubdomain=es
// https://www.reddit.com/r/sysadmin/comments/3pb4o9/sysadmin_portfolio_is_it_even_possible/
// https://www.spectralcoding.com/
// https://bytesizedjosh.tech/#badges
// https://www.calameo.com/books/002516656559d7ca2907b
// https://www.cakeresume.com/portfolios?locale=es&q=administrator

// https://blog.desafiolatam.com/87-proyectos-para-sql-que-te-haran-crecer/

// https://github.com/jwasham/coding-interview-university

// https://www.cambridgeenglish.org/test-your-english/
// https://www.efset.org/