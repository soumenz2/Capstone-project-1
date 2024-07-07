import React from 'react';

const NotesSection: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-black p-6 rounded-lg md:h-96 md:w-96 h-64 w-36 mx-12">
      <h3 className="text-lg font-semibold">All notes</h3>
      <p>This is how I am going to learn MERN Stack in the next 3 months.</p>
    </div>
  );
};

export default NotesSection;
