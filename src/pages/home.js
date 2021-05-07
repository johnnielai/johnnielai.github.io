import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import { itemsExperience, itemProjects } from "../data";
import ProgressiveImage from "react-progressive-image";
import Footer from '../components/footer';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Card = props => {
  const [item] = useState(props.item);
  const [imageDetails] = useState(props.imageDetails);
  const [image] = useState(props.image);
  const history = useHistory();

  const handleClick = () => {
    const height = document.getElementById(`${item.category}-${item.id}-img`).clientHeight;
    const width = document.getElementById(`${item.category}-${item.id}-img`).clientWidth;
    history.push({
      pathname: `/${item.category}/${item.url}`,
      state: {
        item: item,
        startHeight: height,
        startWidth: width
      }
    })
  }

  return (
    <div className='row center' id={`${item.category}-${item.id}`}>
      <div className='image-container' id={`${item.category}-${item.id}-img`}>
        <div
          className='thumbnail'
          ref={image}
          style={{
            maxWidth: imageDetails.width,
            maxHeight: imageDetails.height,
          }}>
          <div className='frame'>
            <Scroll duration={500} smooth={true} to={`${item.category}-${item.id}`}>
              <div onClick={handleClick}>
                <ProgressiveImage
                  src={require(`../images/${item.url}.webp`).default}
                  placeholder={require(`../images/${item.url}-compressed.jpg`).default}>
                  {(src) => (
                    <motion.img
                      src={src}
                      alt={item.title}
                      whileHover={{ scale: 1.1 }}
                      transition={transition}
                    />
                  )}
                </ProgressiveImage>
              </div>
            </Scroll>
          </div>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className='information'>
          <div className='title'>{item.title}</div>
          {/* <div className='location'>
            <span>{item.tenure}</span>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}

const Home = ({ imageDetails, image }) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transtion={{duration: 3}}
    >
      <main>
        <div className='landing'>
          <div className='landing-container'>
            <h1>Johnnie</h1>
          </div>
        </div>
        <div className='container'>
          {itemsExperience.slice(0).reverse().map(item => (
            <Card key={item.id} item={item} imageDetails={imageDetails} image={image} />
          ))}
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}


export default Home;