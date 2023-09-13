import Image from 'next/image';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import './open.css';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.thumbnail} />
       <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </article>
  );
}

export default PostContent;
