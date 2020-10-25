import React from 'react';
import './Blog.css';
import winson from '../../../images/Ellipse-1.png';
import henry from '../../../images/Ellipse-2.png';
import aliza from '../../../images/Ellipse-3.png';
import BlogCard from '../BlogCard/BlogCard';


const BlogsData = [
    {
        id: 1,
        name: 'Dr. Cudi',
        img: winson,
        title: 'Check at least a doctor in a year for your teeth',
        date: '23 April 2020',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    },
    {
        id: 2,
        name: 'Dr. Sinthia',
        img: henry,
        title: 'Two time brush in a day can keep you healthy',
        date: '23 April 2020',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    },
    {
        id: 3,
        name: 'Dr. Henry',
        img: aliza,
        title: 'The tooth cancer is taking a challenge',
        date: '23 April 2020',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
    }
]

const Blog = () => {
    return (
        <section className="blog-section pt-5">
            <div className="container">
                <div className="text-center my-4">
                    <h5 className="text-primary text-uppercase">Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="row g-3 mt-4">
                    {
                        BlogsData.map(blog => <BlogCard blog={blog} key={blog.id}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;