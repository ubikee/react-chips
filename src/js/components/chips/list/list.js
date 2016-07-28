import React from 'react';
import { Icon, DecoratedIcon, Button } from '../../chips/buttons/buttons';
import './list.css';

const Avatar = ({color, initial}) => (
  <div className="flex center centred" style={{color: '#000', backgroundColor: color, borderRadius: '10rem', width: '3.6rem', height: '3.6rem'}}>
    {initial}
  </div>
);

const ListItemLine = ({text, info}) => {
  return (
    <div className="subtitle">
      <span className="flex expand">{text}</span>
      <span>{info}</span>
    </div>
  );
};

const ListItem = ({ id, title, subtitle, info, icon, decorator, avatar, children, selected, onSelected, action }) => {

  const handleSelected = () => {
    onSelected(id);
  };

  const renderAvatar = () => <Avatar color={avatar.color} initial={avatar.initial}/>;
  const renderIcon = decorator ? () => <DecoratedIcon icon={icon} decorator={decorator} /> : () => <Icon icon={icon} />;
  const renderDecorator = avatar ? renderAvatar() : icon ? renderIcon(): '';

  return (
    <li className={`listitem selectable ${selected}`} onClick={handleSelected} >
      <div className="avatar ">
        {renderDecorator}
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">
          <span className="flex expand">{subtitle}</span>
          <span>{info}</span>
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="actions">{action}</div>
    </li>
  );
};

const List = (props) => (
  <div className="list">
    <ul>{props.children}</ul>
  </div>
);

List.propTypes = {
  children: React.PropTypes.node,
};

export { List, ListItem, ListItemLine };
