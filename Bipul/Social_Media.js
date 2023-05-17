// User constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
    this.posts = [];
  
    this.createPost = function(postContent) {
      const post = {
        content: postContent,
        author: this.name,
        authorAge: this.age
      };
      this.posts.push(post);
    };
  
    this.listPosts = function() {
      console.log(`Posts by ${this.name}:`);
      this.posts.forEach((post, index) => {
        console.log(`- Post ${index + 1}: "${post.content}"`);
      });
    };
  
    this.getProfileInfo = function() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
    };
  }
  
  // Create users
  const user1 = new User("John", 25);
  const user2 = new User("Emily", 30);
  
  // Create posts
  user1.createPost("Hello, everyone!");
  user1.createPost("Enjoying a beautiful day!");
  user2.createPost("Excited for the weekend!");
  user2.createPost("Just finished reading a great book!");
  
  // Display user information and posts
  user1.getProfileInfo();
  user1.listPosts();
  
  user2.getProfileInfo();
  user2.listPosts();
  