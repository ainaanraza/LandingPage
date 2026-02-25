
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PlacementStats from './components/PlacementStats';
import Software from './components/Software';
import Testimonials from './components/Testimonials';
import CoursesList from './components/CoursesList';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-[#050510] min-h-screen text-white font-sans selection:bg-[#D91278] selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <PlacementStats />
                <Features />
                <Software />
                <Curriculum />
                <CoursesList />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default App;
