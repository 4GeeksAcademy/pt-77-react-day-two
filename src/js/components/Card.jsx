import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer className="blockquote-footer">{props.quoted}</footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Card;