

const Banner = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Article Atrium
      </h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Article Atrium is your ultimate destination for insightful blogs, 
        thought-provoking articles, and a wealth of knowledge across various topics.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          What You Can Find Here:
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Curated blog posts on a wide range of topics</li>
          <li>Expert opinions and insights</li>
          <li>Guides, tutorials, and how-tos</li>
          <li>Inspiring stories and personal experiences</li>
          <li>Bookmark your favorite articles for easy access</li>
        </ul>
      </div>
    </div>
    );
};

export default Banner; 