import { FormattedMessage, useIntl } from 'react-intl'
import './Blog.scss'

function BlogPost({ title, content, date, author, photo }) {
  const formattedContent = content.replace(/\n\n/g, '<br/><br/>')

  return (
    <div className="blog-post">
      <div className="blog-post__photo">
        <img src={photo} alt={author} />
      </div>

      <div className="blog-post__content">
        <h3>{title}</h3>

        <p
          dangerouslySetInnerHTML={{
            __html: formattedContent,
          }}
        />

        <div className="blog-post__info">
          <span className="author">{author}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  )
}

function Blog() {
  const intl = useIntl()

  const posts = [
    {
      title: intl.formatMessage({ id: 'blog.post.1.title' }),
      content: intl.formatMessage({ id: 'blog.post.1.content' }),
      date: intl.formatMessage({ id: 'blog.post.1.date' }),
      author: intl.formatMessage({ id: 'blog.post.1.author' }),
      photo: '/img/blog/i-goncharenko.png',
    },
  ]

  return (
    <div className="container">
      <div className="blog">
        <h2 className="blog__title">
          <FormattedMessage id="blog.title" />
        </h2>

        <p
          className="blog__subtitle"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'blog.subtitle' }),
          }}
        />

        <div className="blog__posts">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              content={post.content}
              date={post.date}
              author={post.author}
              photo={post.photo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
