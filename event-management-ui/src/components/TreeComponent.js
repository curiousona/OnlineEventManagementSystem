// src/components/TreeComponent.js
import React from 'react';
import '../App.css'; // Import App.css for styling

const TreeNode = ({ node }) => (
    <div className="TreeNode">
        <div className="TreeNode-title"><strong>{node.title}</strong></div>
        <p>{node.description}</p>
        <p>Date: {new Date(node.date).toLocaleDateString()}</p>
        {node.subEvents && node.subEvents.length > 0 && (
            <div className="TreeNode-children">
                {node.subEvents.map((childNode, index) => (
                    <TreeNode key={index} node={childNode} />
                ))}
            </div>
        )}
    </div>
);

const TreeComponent = ({ data }) => {
    return (
        <div className="TreeComponent">
            <h2>Event Hierarchy</h2>
            {data.length > 0 ? (
                data.map(rootNode => (
                    <TreeNode key={rootNode.eventId} node={rootNode} />
                ))
            ) : (
                <p>No hierarchy data available.</p>
            )}
        </div>
    );
};

export default TreeComponent;
