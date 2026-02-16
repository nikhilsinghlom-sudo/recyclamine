import { motion } from 'framer-motion';

interface FadeUpProps {
    children: React.ReactNode; // To wrap any content (text, images, etc.)
    duration?: number; // Optional: Duration for the animation
    delay?: number; // Optional: Delay for the animation
    threshold?: number; // Optional: Threshold when to trigger the animation
}

const FadeUp: React.FC<FadeUpProps> = ({
    children,
    duration = 1,  // Default duration of 1 second
    delay = 0,     // Default no delay
    threshold = 0.1, // Default threshold of 30% visibility
}) => {
    return (
        <motion.div className="anim"
            initial={{ opacity: 0, y: 20 }}  // Start with opacity 0 and 100px below
            whileInView={{ opacity: 1, y: 0 }}  // Fade in and move to original position
            transition={{ duration, delay }}  // Apply the duration and delay
            viewport={{ amount: threshold, once: true }}  // Trigger animation only once when element comes into view
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;
