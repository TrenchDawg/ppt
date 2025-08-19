import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import TutorCard from '../components/TutorCard';
import { tutors } from '../data/tutors';

const HomePage = () => {
    return (
        <div>
            <SiteHeader />
            <main className="container mx-auto p-4">
                <section className="hero text-center">
                    <h1 className="text-4xl font-bold">Welcome to PeerPathway Tutors</h1>
                    <p className="mt-2 text-lg">Connecting students with expert tutors.</p>
                    <div className="mt-4">
                        <a href="/tutors" className="btn btn-primary">Find a Tutor</a>
                        <a href="/become-a-tutor" className="btn btn-secondary">Become a Tutor</a>
                    </div>
                </section>
                <section className="how-it-works mt-8">
                    <h2 className="text-2xl font-semibold">How it Works</h2>
                    <p className="mt-2">Our platform makes it easy to find and schedule tutoring sessions.</p>
                </section>
                <section className="featured-tutors mt-8">
                    <h2 className="text-2xl font-semibold">Featured Tutors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {tutors.map(tutor => (
                            <TutorCard key={tutor.slug} tutor={tutor} />
                        ))}
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
};

export default HomePage;