import React from "react";
import React, { useEffect, useState, useMemo } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.scss';

const EMOJIS = ['🌙','✨','🚀','🔒','🥶','🥵','🤯','😽','🤡','💩','👻','😺','🦾','🦿','👨🏻‍🔧','👨🏻‍💻'];

const Preloader = ({ duration = 3000, onFinish }) => {
  const [visible, setVisible] = useState(true);
  const emoji = useMemo(() => EMOJIS[Math.floor(Math.random()*EMOJIS.length)], []);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.content}>
            <motion.div
              className={styles.shield}
              animate={{ scale: [1,1.2,1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaShieldAlt size={48}/>
            </motion.div>
            <h1 className={styles.title}>Check your browser...</h1>
            <div className={styles.emoji}>{emoji}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
