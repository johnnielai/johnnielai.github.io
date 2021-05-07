import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const first = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const middle = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 0,
    },
  },
};

const last = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};

const Work = ({ imageDetails }) => {
  const { state } = useLocation();
  const { item, startHeight, startWidth } = state;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'
      onAnimationComplete={() => setCanScroll(true)}>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div className='model' style={{ opacity: scale }}>
              <motion.span className='first' variants={first}>
                <motion.span variants={letter}>{item.title}</motion.span>
              </motion.span>
              {/* <motion.span className='first' variants={first}>
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className='last' variants={last}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>q</motion.span>
              </motion.span> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <motion.div style={{ opacity: scale }} className='location'>
                <span>{item.location}</span>
              </motion.div>
              <motion.a style={{ opacity: scale }} className='site' href={item.site}>{item.site}</motion.a>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  height: startHeight,
                  width: startWidth,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 600,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require(`../images/${item.url}.webp`).default}
                    alt={`${item.title}`}
                    style={{ opacity: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : 0,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {canScroll && item.description &&
        <div className='detailed-information'>
          <div className='container'>
            <div className='row'>
              <div className='left'>
                <h2 className='title'>
                  {item.position}
                </h2>
                <h3>
                  {item.tenure}
                </h3>
              </div>
              <div className='right'>
                <ul>
                  {item.description.map((description, index) => (
                    <li key={index}>
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </motion.div>
  );
};

export default Work;