import React from 'react';

const Item = ({ item, onDecrease, onToggleTheme, onSaveForLater, onRemove }) => (
  <div className="Cart-Items" key={item.id}>
    <div className="image-box">
      <img src="images/apple.png" style={{ height: "120px" }} />
    </div>
    <div className="about">
      <h6 className="brandtitle">{item.brand}</h6>
      <h1 className="title">{item.title}</h1>
      <h3 className="subtitle">{item.description}</h3>
      <img src={item.thumbnail} style={{ height: "30px" }} />
    </div>
    <div className="counter">
      <div className="btn" onClick={onDecrease}>-</div>
      <div className="count">{item.quantity}</div>
      <div className="btn" onClick={onToggleTheme}>+</div>
    </div>
    <div className="prices">
      <div className="amount">{item.price}</div>
      <div className="save" onClick={onSaveForLater}><u>Save for later</u></div>
      <div className="remove" onClick={onRemove}><u>Remove</u></div>
    </div>
  </div>
);

export default Item;