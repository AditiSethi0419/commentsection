import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      
      <Comments
        commentsUrl="http://localhost/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
