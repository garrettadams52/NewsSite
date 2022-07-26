function Article(props) {
 
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.created_date}</p>
      <h2>{props.byline ? props.byline : 'No Byline'}</h2>
      <img src={props.image ? props.image : ''}></img>
      <p>{props.abstract}</p>
    </div>
  )
}

export default Article;
