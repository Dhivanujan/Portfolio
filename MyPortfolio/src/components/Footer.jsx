const Footer = () => {
    return (
        <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Dhivanujan. All rights reserved.</p>
                <p className="mt-2">Built with React, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
