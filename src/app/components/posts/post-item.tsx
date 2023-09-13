import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';
import { useRouter } from "next/navigation";

function PostItem(props) {
  const { title, thumbnail, pubDate, id } = props.post;

  const linkPath = `/posts/${id}`;
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <Link href={{
         pathname: linkPath
      }}>
          <div className={classes.image}>
            <Image
              src={thumbnail}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
          </div>
      </Link>
    </li>
  );
}

export default PostItem;
