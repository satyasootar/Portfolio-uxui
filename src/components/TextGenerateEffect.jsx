'use client';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const TextGenerateEffect = ({
    words = '',
    className = '',
    delayPerWord = 0.1,
    duration = 0.5,
}) => {
    const wordsArray = words.split(' ');

    return (
        <div className={`font-bold leading-snug tracking-wide ${className}`}>
            <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-x-0 tablet:gap-x-1 laptop:gapx-2 laptop:gap-y-2 "
            >
                {wordsArray.map((word, index) => (
                    <motion.span
                        key={word + index}
                        className="opacity-0 text-primary-text"
                        variants={{
                            hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: {
                                    duration,
                                    delay: index * delayPerWord,
                                },
                            },
                        }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};
