import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='https://miro.medium.com/v2/resize:fill:176:176/1*bj70GMl6Rf-nIYATAANrFA.jpeg'
          alt='An image showing shakeel'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm shakeel</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React or React-native.
      </p>
    </section>
  );
}

export default Hero;
