import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeroBanner() {
    return (
        <section
            className="text-center text-white d-flex align-items-center justify-content-center"
            style={{
                height: "90vh",
                backgroundImage:
                    "url('https://cdn.talkie-ai.com/image_gen/1e85f7fb-a093-4fc0-9982-bb718356b8dc-1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >

            {/* المحتوى */}
            <motion.div

                style={{ position: "relative", zIndex: 1 }}
            >
                <div className="d-flex align-items-center justify-content-between p-4">
                    {/* النص */}
                    <div className="me-3">
                        <motion.h1
                            initial={{ y: "-100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="display-4 fw-bold mb-3">Relax & Enjoy the Vibes ☕
                        </motion.h1>
                        <motion.p
                            initial={{ y: "-100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="lead mb-0">
                            Chill with smooth beats, creativity, and inspiration.
                        </motion.p>
                    </div>

                    {/* الصورة */}
                    <motion.div>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}

                            src="https://wallpaperaccess.com/full/1185024.png"
                            alt="Lofi Vibes"
                            className="img-fluid rounded"
                            style={{ maxHeight: "250px" }}
                        />
                    </motion.div>
                </div>
                <motion.a
                    href="#explore"
                    className="btn btn-outline-light btn-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}

                >
                    Explore Now
                </motion.a>
            </motion.div>
        </section>
    );
}
