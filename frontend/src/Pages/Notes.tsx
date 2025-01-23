import React, { useEffect, useState } from "react";

const Notes = () => {
  const [folderStructure, setFolderStructure] = useState(null);
  const [openFolders, setOpenFolders] = useState({}); // Track open/closed state

  useEffect(() => {
    // Fetch the folder structure JSON file
    fetch("/folderStructure.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch folder structure");
        }
        return response.json();
      })
      .then((data) => setFolderStructure(data))
      .catch((error) => console.error("Error fetching folder structure:", error));
  }, []);

  const toggleFolder = (path) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [path]: !prevState[path], // Toggle the folder's open/closed state
    }));
  };

  const renderFolderStructure = (structure, path = "") => {
    return Object.entries(structure).map(([key, value]) => {
      const currentPath = path ? `${path}/${key}` : key;

      if (value === null) {
        // It's a file
        return (
          <li key={currentPath}>
            <a
              href={`/${currentPath}`}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {key}
            </a>
          </li>
        );
      }

      // It's a folder
      const isOpen = openFolders[currentPath] || false; // Check if the folder is open
      return (
        <li key={currentPath}>
          <div
            className="font-semibold cursor-pointer text-lg"
            onClick={() => toggleFolder(currentPath)}
          >
            {isOpen ? "📂" : "📁"} {key} {/* Icon changes based on state */}
          </div>
          {isOpen && (
            <ul className="ml-4 border-l border-gray-300 pl-4">
              {renderFolderStructure(value, currentPath)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen items-center flex flex-col px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-medium mb-6">Notes</h1>
        <p className="text-lg text-gray-600 leading-8">
          Welcome to my notes page! Here, I share my thoughts, learnings, and
          insights on software development, machine learning, and personal
          growth. Stay tuned for updates! Notice this notes are taken by me during my readings...
        </p>
        <p className="text-lg text-gray-600 leading-8">
          Explore topics and subtopics below:
        </p>
        {folderStructure ? (
          <ul className="mt-6 space-y-4 text-left">
            {renderFolderStructure(folderStructure)}
          </ul>
        ) : (
          <p>Loading folder structure...</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
